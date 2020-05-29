# -*- coding: utf-8 -*-

"""
#selenium 설치
cmd창에서 python -m pip install selenium 실행
"""
#C:\Python\Python37-32\project


"""
<참고>
1. Selenium, BeautifulSoup 전반적인 내용(다음카페 본문 크롤링 예제)
https://comdoc.tistory.com/entry/6-selenium-%EA%B3%BC-BeautifulSoup%EC%9C%BC%EB%A1%9C-daum-%EC%B9%B4%ED%8E%98%EB%A5%BC-%ED%81%AC%EB%A1%A4%EB%A7%81-%ED%95%B4%EB%B3%B4%EC%9E%90
2. Selenium, BeautifulSoup 전반적인 내용(인스타 태그 수 예제)
https://seyul.tistory.com/45
"""


#library load
from selenium import webdriver
from bs4 import BeautifulSoup
import pandas as pd
import time


#크롬창을 띄우지 않는 옵션
options = webdriver.ChromeOptions()
options.add_argument('headless')
options.add_argument('disable-gpu')

#selenium 시작
path = "C:/Python/Python37-32/project/chromedriver.exe"
driver = webdriver.Chrome(path, options=options)

#get함수에 사이트주소 전달
driver.get("https://duksung.everytime.kr/search/all/학부/p/1")
time.sleep(2)

#F12 이용해 로그인을 위한 input 태그 찾기
#태그 안에 로그인 input name 정보 찾기
element_id = driver.find_element_by_name("userid")
element_pw = driver.find_element_by_name("password")

#element에 id, password 입력
element_id.send_keys("아이디") #'아이디'에 실제 아이디 넣기
element_pw.send_keys("비밀번호") #'비밀번호'에 실제 비밀번호 넣기

#로그인 버튼 클릭
driver.find_element_by_xpath("/html/body/div/form/p[3]/input").click()

#for문에서 쓰일 변수 생성
maximum = 50
html = ""

#for문 : 0부터 50페이지까지 본문 수집
for page_number in range(maximum+1):
    URL = "https://duksung.everytime.kr/search/all/학부/p/" + str(page_number)
    driver.get(URL)
    time.sleep(2)
    html = html + driver.page_source
soup = BeautifulSoup(html, 'html.parser')
data_select = soup.select('div.article > div.wrap.articles > article > a > p')
"""
<참고> 여러 페이지에 일련의 같은 콘텐츠가 있는 경우
https://l0o02.github.io/2018/06/14/python-crawling-pagination-1/
"""

#selenium 종료
driver.quit()

#데이터 프레임으로 변경
data_all = []
for item in zip(data_select):
    data_all.append(
        {
            'data' : item[0].text
        }
    )
everytime_data = pd.DataFrame(data_all)
print(everytime_data)

#csv와 excel 파일로 각각 저장
everytime_data.to_csv("everytime_crawling_data.csv")
everytime_data.to_excel("everytime_crawling_data.xlsx")




"""
#키워드 검색
element_keyword = driver.find_element_by_xpath("/html/body/div[2]/div[3]/form/input")
element_keyword.send_keys("학부")
element_keyword.submit()
time.sleep(5)

#팝업창 닫기
driver.find_element_by_xpath("/html/body/div[4]/ul/li[3]/a").click()
"""
