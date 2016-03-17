#!/bin/ssh
echo '请输入项目名称'
read name
#移除存在项目
rm -rf "$name"
# 创建目录
if  test $? -eq 0
then
    mkdir "$name"
    cd "$name"
    # 创建日志
    touch install.log
    # 检查REMEAD是不是存在
    if test -e ./REMEAD.md
    then
    else
        touch REMEAD.md
    fi

    if test $? -eq 0
    then
        echo "$name 创建成功"
        npm init name
        npm install vue >> install.log
        if test $? -eq 0
        then
            echo "npm 初始化成功，继续安装vue"
            npm install vue-router >> install.log
        fi
        if test $? -eq 0
        then
            echo "vue 安装成功，继续安装vue-resource"
            npm install vue-resource >> install.log
        fi
        if test $? -eq 0
        then
            echo "vue-resource 安装成功，继续安装"
            npm install vue-loader >> install.log
        fi
        if test $? -eq 0
        then
            echo "vue-loader 安装成功，继续安装webpack"
            npm install webpack >> install.log
        fi
        if test $? -eq 0
        then
            echo "webpack 安装成功，继续安装sass"
            # 1.删除原gem源
            gem sources --remove https://rubygems.org/ >> install.log
            # 2.添加国内淘宝源
            gem sources -a https://ruby.taobao.org/ >> install.log
            sudo gem install sass >> install.log
            sudo gem install compass >> install.log
        fi
        if test $? -eq 0
        then
            echo "项目建立完成，如果想了解详情，参考install.log"
        fi
    fi
fi
