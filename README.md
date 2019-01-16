# todo-list
使用antd dva umi 和 django rest-framework 写的 todo-list例子

# 运行

软件版本：
* python3.7.2
* node 11.5.0
* npm 6.4.1

运行django
```
cd todo-list/backend/
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver localhost:3000
```
运行antd
```
cd todo-list/frontend/
npm i
npm start
```

运行成功后访问地址为 ``http://localhost:8000``
