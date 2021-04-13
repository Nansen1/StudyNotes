- Mac终端中使用Sublime命令行打开文件

    Sublime自带命令行工具路径为/Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl

    通过ln命令为上述subl工具创建一个快捷方式，并将此快捷方式放到/usr/local/bin路径下，此路径是包含在$PATH中
```
$ sudo ln -s /Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl /usr/local/bin/subl

$ ls -l /usr/local/bin/subl  //查看软链接状态
$ lrwxr-xr-x  1 root  admin  68  5 16 21:20 subl -> /Applications/Sublime Text.app/Contents/SharedSupport/bin/subl
$ subl test.txt
```