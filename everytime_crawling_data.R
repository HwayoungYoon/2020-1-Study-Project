##### 0. 학부제 데이터 분석 위한 패키지 설정

#패키지 설치 환경 설정
install.packages("XLConnect")
library(XLConnect)
Sys.setenv(JAVA_HOME='C:\\Program Files\\Java\\jre1.8.0_231')
install.packages("rJava")
library(rJava)

#KoNLP, wordcloud2 패키지 설치 및 로드
install.packages("KoNLP")
install.packages("wordcloud2")
library(KoNLP)
library(wordcloud2)

#세종 사전 설정
useSejongDic()

#writexl 패키지 설치 및 로드
install.packages("writexl")
library(writexl)

#treemap 패키지 설치 및 로드
install.packages("treemap")
library(treemap)

#RColorBrewer 패키지 설치 및 로드
install.packages("RColorBrewer")
library(RColorBrewer)

##############################################################################################################

##### 1. 전체 학부제 데이터

#everytime 크롤링 전체 데이터 txt파일을 crawl_data_all에 할당
crawl_data_all <- readLines("D:\\project\\everytime_crawling_data_all.txt")
head(crawl_data_all)


#명사 추출: crawl_data_all의 각 행에서 명사 추출해 crawl_data_all_2에 할당
crawl_data_all_2 <- sapply(crawl_data_all, extractNoun, USE.NAMES = F)
head(crawl_data_all_2)

#행렬의 벡터 변환: crawl_data_all_2를 벡터 변환 후 crawl_undata_all에 할당
crawl_undata_all <- unlist(crawl_data_all_2)
head(crawl_undata_all)

#2글자 이상인 단어만 추출하여 저장
crawl_undata_all <- Filter(function(x) { nchar(x) >= 2 }, crawl_undata_all)
#영어, 숫자 제거하여 저장
crawl_undata_all <- gsub("[A-Za-z0-9]", "", crawl_undata_all)
#특수문자 제거하여 저장
crawl_undata_all <- gsub("[~!@#$%^&*()-_|=+?:]", "", crawl_undata_all)
#ㄱ부터 ㅎ까지 자음 제거하여 저장
crawl_undata_all <- gsub("[ㄱ-ㅎ]", "", crawl_undata_all)
#한 개 이상의 ㅜ와 ㅠ 제거하여 저장
crawl_undata_all <- gsub("(ㅜ|ㅠ)+", "", crawl_undata_all)


#사용 빈도 확인: crawl_undata_all의 빈도표를 crawl_all_table에 할당
crawl_all_table <- table(crawl_undata_all)
head(crawl_all_table)

#데이터 정렬: crawl_all_table을 내림차순 정렬 하여 crawl_all_table_sort에 할당
crawl_all_table_sort <- sort(crawl_all_table, decreasing = T)
head(crawl_all_table_sort)

#crawl_all_table_sort를 데이터프레임으로 변환 후 crawl_all_table_df에 할당
crawl_all_table_df <- as.data.frame(crawl_all_table_sort)
head(crawl_all_table_df)
#빈도가 2 이상인 경우만 선택해 crawl_all_table_df_1에 할당
crawl_all_table_df_1 <- subset(crawl_all_table_df, Freq >= 2)
head(crawl_all_table_df_1)
#비어있는 행인 2번째 행을 제거하여 crawl_all_table_df_2에 할당
crawl_all_table_df_2 <- crawl_all_table_df_1[-2,]
#학부에 대한 내용인 1번째 행을 제거하여 crawl_all_table_df_3에 할당
crawl_all_table_df_3 <- crawl_all_table_df_2[-1,]
#crawl_all_table_df_3에서 상위 30개의 데이터 확인
head(crawl_all_table_df_3, n=30)
#빈도가 20 이상인 경우만 선택해 crawl_all_table_df_4에 할당
crawl_all_table_df_4 <- subset(crawl_all_table_df_3, Freq >= 20)
crawl_all_table_df_4

#crawl_all_table_df_3를 엑셀 파일로 출력
write_xlsx(crawl_all_table_df_3, path="D:\\project\\crawl_all_data.xlsx")


#wordcloud 기본형
#(색상참고: https://github.com/EmilHvitfeldt/r-color-palettes/blob/master/man/figures/README-RColorBrewer-1.png)
pal_1 <- brewer.pal(8, "Spectral")[1]
pal_2 <- brewer.pal(8, "OrRd")[3]
pal_3 <- brewer.pal(8, "Greys")[3]
wordcloud2(crawl_all_table_df_2, size = 1.7, col = rep_len(c(pal_1, pal_2, pal_3), nrow(demoFreq)), backgroundColor = "black")
wordcloud2(crawl_all_table_df_3, size = 0.7, col = rep_len(c(pal_1, pal_2, pal_3), nrow(demoFreq)), backgroundColor = "black")

#단어명 열(crawl_undata_all)과 단어 개수 열(Freq)로 트리 맵 표현
treemap(crawl_all_table_df_4, index = "crawl_undata_all", vSize = "Freq", title = "전체 학부제 데이터 분포", vColor="Freq", type="dens")


##############################################################################################################

##### 2. 신입생(20학번) 유입 이후 학부제 데이터

#everytime 크롤링 전체 데이터 txt파일을 crawl_data_after에 할당
crawl_data_after <- readLines("D:\\project\\everytime_crawling_data_after.txt")
head(crawl_data_after)


#명사 추출: crawl_data_after의 각 행에서 명사 추출해 crawl_data_after_2에 할당
crawl_data_after_2 <- sapply(crawl_data_after, extractNoun, USE.NAMES = F)
head(crawl_data_after_2)

#행렬의 벡터 변환: crawl_data_after_2를 벡터 변환 후 crawl_undata_after에 할당
crawl_undata_after <- unlist(crawl_data_after_2)
head(crawl_undata_after)

#2글자 이상인 단어만 추출하여 저장
crawl_undata_after <- Filter(function(x) { nchar(x) >= 2 }, crawl_undata_after)
#영어, 숫자 제거하여 저장
crawl_undata_after <- gsub("[A-Za-z0-9]", "", crawl_undata_after)
#특수문자 제거하여 저장
crawl_undata_after <- gsub("[~!@#$%^&*()-_|=+?:]", "", crawl_undata_after)
#ㄱ부터 ㅎ까지 자음 제거하여 저장
crawl_undata_after <- gsub("[ㄱ-ㅎ]", "", crawl_undata_after)
#한 개 이상의 ㅜ와 ㅠ 제거하여 저장
crawl_undata_after <- gsub("(ㅜ|ㅠ)+", "", crawl_undata_after)


#사용 빈도 확인: crawl_undata_after의 빈도표를 crawl_after_table에 할당
crawl_after_table <- table(crawl_undata_after)
head(crawl_after_table)

#데이터 정렬: crawl_after_table을 내림차순 정렬 하여 crawl_after_table_sort에 할당
crawl_after_table_sort <- sort(crawl_after_table, decreasing = T)
head(crawl_after_table_sort)

#crawl_after_table_sort를 데이터프레임으로 변환 후 crawl_after_table_df에 할당
crawl_after_table_df <- as.data.frame(crawl_after_table_sort)
head(crawl_after_table_df)
#빈도가 2 이상인 경우만 선택해 crawl_after_table_df_1에 할당
crawl_after_table_df_1 <- subset(crawl_after_table_df, Freq >= 2)
head(crawl_after_table_df_1)
#비어있는 행인 2번째 행을 제거하여 crawl_after_table_df_2에 할당
crawl_after_table_df_2 <- crawl_after_table_df_1[-2,]
#학부에 대한 내용인 1번째 행을 제거하여 crawl_after_table_df_3에 할당
crawl_after_table_df_3 <- crawl_after_table_df_2[-1,]
#crawl_after_table_df_3에서 상위 30개의 데이터 확인
head(crawl_after_table_df_3, n=30)
#빈도가 20 이상인 경우만 선택해 crawl_after_table_df_4에 할당
crawl_after_table_df_4 <- subset(crawl_after_table_df_3, Freq >= 20)
crawl_after_table_df_4

#crawl_after_table_df_3를 엑셀 파일로 출력
write_xlsx(crawl_after_table_df_3, path="D:\\project\\crawl_after_data.xlsx")


#wordcloud 기본형
#(색상참고: https://github.com/EmilHvitfeldt/r-color-palettes/blob/master/man/figures/README-RColorBrewer-1.png)
pal_1 <- brewer.pal(8, "Spectral")[1]
pal_2 <- brewer.pal(8, "OrRd")[3]
pal_3 <- brewer.pal(8, "Greys")[3]
wordcloud2(crawl_after_table_df_2, size = 1.7, col = rep_len(c(pal_1, pal_2, pal_3), nrow(demoFreq)), backgroundColor = "black")
wordcloud2(crawl_after_table_df_3, size = 0.7, col = rep_len(c(pal_1, pal_2, pal_3), nrow(demoFreq)), backgroundColor = "black")

#단어명 열(crawl_undata_after)과 단어 개수 열(Freq)로 트리 맵 표현
treemap(crawl_after_table_df_4, index = "crawl_undata_after", vSize = "Freq", title = "신입생(20학번) 유입 이후 학부제 데이터 분포", vColor="Freq", type="dens")


##############################################################################################################

##### 3. 신입생(20학번) 유입 이전 학부제 데이터

#everytime 크롤링 전체 데이터 txt파일을 crawl_data_before에 할당
crawl_data_before <- readLines("D:\\project\\everytime_crawling_data_before.txt")
head(crawl_data_before)


#명사 추출: crawl_data_before의 각 행에서 명사 추출해 crawl_data_before_2에 할당
crawl_data_before_2 <- sapply(crawl_data_before, extractNoun, USE.NAMES = F)
head(crawl_data_before_2)

#행렬의 벡터 변환: crawl_data_before_2를 벡터 변환 후 crawl_undata_before에 할당
crawl_undata_before <- unlist(crawl_data_before_2)
head(crawl_undata_before)

#2글자 이상인 단어만 추출하여 저장
crawl_undata_before <- Filter(function(x) { nchar(x) >= 2 }, crawl_undata_before)
#영어, 숫자 제거하여 저장
crawl_undata_before <- gsub("[A-Za-z0-9]", "", crawl_undata_before)
#특수문자 제거하여 저장
crawl_undata_before <- gsub("[~!@#$%^&*()-_|=+?:]", "", crawl_undata_before)
#ㄱ부터 ㅎ까지 자음 제거하여 저장
crawl_undata_before <- gsub("[ㄱ-ㅎ]", "", crawl_undata_before)
#한 개 이상의 ㅜ와 ㅠ 제거하여 저장
crawl_undata_before <- gsub("(ㅜ|ㅠ)+", "", crawl_undata_before)


#사용 빈도 확인: crawl_undata_before의 빈도표를 crawl_before_table에 할당
crawl_before_table <- table(crawl_undata_before)
head(crawl_before_table)

#데이터 정렬: crawl_before_table을 내림차순 정렬 하여 crawl_before_table_sort에 할당
crawl_before_table_sort <- sort(crawl_before_table, decreasing = T)
head(crawl_before_table_sort)

#crawl_before_table_sort를 데이터프레임으로 변환 후 crawl_before_table_df에 할당
crawl_before_table_df <- as.data.frame(crawl_before_table_sort)
head(crawl_before_table_df)
#빈도가 2 이상인 경우만 선택해 crawl_before_table_df_1에 할당
crawl_before_table_df_1 <- subset(crawl_before_table_df, Freq >= 2)
head(crawl_before_table_df_1)
#비어있는 행인 2번째 행을 제거하여 crawl_before_table_df_2에 할당
crawl_before_table_df_2 <- crawl_before_table_df_1[-2,]
#학부에 대한 내용인 1번째 행을 제거하여 crawl_before_table_df_3에 할당
crawl_before_table_df_3 <- crawl_before_table_df_2[-1,]
#crawl_before_table_df_3에서 상위 30개의 데이터 확인
head(crawl_before_table_df_3, n=30)
#빈도가 20 이상인 경우만 선택해 crawl_before_table_df_4에 할당
crawl_before_table_df_4 <- subset(crawl_before_table_df_3, Freq >= 20)
crawl_before_table_df_4

#crawl_before_table_df_3를 엑셀 파일로 출력
write_xlsx(crawl_before_table_df_3, path="D:\\project\\crawl_before_data.xlsx")


#wordcloud 기본형
#(색상참고: https://github.com/EmilHvitfeldt/r-color-palettes/blob/master/man/figures/README-RColorBrewer-1.png)
pal_1 <- brewer.pal(8, "Spectral")[1]
pal_2 <- brewer.pal(8, "OrRd")[3]
pal_3 <- brewer.pal(8, "Greys")[3]
wordcloud2(crawl_before_table_df_2, size = 1.7, col = rep_len(c(pal_1, pal_2, pal_3), nrow(demoFreq)), backgroundColor = "black")
wordcloud2(crawl_before_table_df_3, size = 0.7, col = rep_len(c(pal_1, pal_2, pal_3), nrow(demoFreq)), backgroundColor = "black")

#단어명 열(crawl_undata_before)과 단어 개수 열(Freq)로 트리 맵 표현
treemap(crawl_before_table_df_4, index = "crawl_undata_before", vSize = "Freq", title = "신입생(20학번) 유입 이전 학부제 데이터 분포", vColor="Freq", type="dens")
