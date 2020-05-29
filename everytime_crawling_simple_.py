# -*- coding: utf-8 -*-

"""
에브리타임 크롤링

https://duksung.everytime.kr/login

<게시판 id>
자유게시판 : 255744
비밀게시판 : 255745
질문게시판 : 259736
졸업생게시판 : 385950
새내기게시판 : 369476
홍보게시판 : 367427
동아리,학회 : 418767
정보게시판 : 258600
취업,진로 : 386041

예대 : 407689
경영학과 : 409347
국제통상학과 : 402510
심리학과 : 408932
회계학과 : 408012
정보통계학과 : 408078
법학과 : 411794
컴퓨터공학과 : 416182
문화인류학과 : 410465
IT미디어공학과 : 420681
중어중문학과 : 422975
스페인어학과 : 408844
식품영양학과 : 407513
프리팜/바이오공학과 : 408840
영어영문학과 : 412855
유아교육과 : 408833
국어국문학과 : 408868
수학과 : 408824
사회복지학과 : 420633
화학과 : 410730
아동가족학과 : 409574
문헌정보학과 : 409762
미술사학과 : 433793
일어일문학과 : 428929
정치외교학과 : 432713
사학과 : 414364
사회학과 : 409436
철학과 : 445432
불어불문학과 : 455364
"""

#####로그인
import requests as rq

#로그인 정보
LOGIN_INFO = {
    'userid':'아이디', #'아이디'에 실제 아이디 넣기
    'password':'비밀번호', #'비밀번호'에 실제 비밀번호 넣기
    'redirect':'/',
    }
login_url = 'https://duksung.everytime.kr/login'
api_url = 'https://api.everytime.kr'

#session 생성
with rq.Session() as s:
    login_res = s.post(login_url, data=LOGIN_INFO)
    
    if login_res.status_code != 200: #log-in-check
        raise Exception('Log-in Failed')
    #Session 유지

#크롤링
everytime_board_list_ds = s.post(api_url + '/find/board/article/list', data={
        'id':'search',
        'limit_num':20,
        'start_num':0,
        'moiminfo':True,
        'search_type':4,
        'keyword':'학부',
    })

print(everytime_board_list_ds.text)

everytime_board_list_ds_test = s.post(api_url + '/find/board/article/list', data={
        'id':255745,
        'limit_num':20,
        'start_num':0,
        'moiminfo':True,
    })

print(everytime_board_list_ds_test.text)

"""
https://financedata.github.io/posts/python_news_cloud_text.html
"""
