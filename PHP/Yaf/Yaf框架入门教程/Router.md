### 最后定义的路由优先生效
### 路由协议
#### 静态路由
- 默认支持静态路由协议
```
四层: http://yaf-skel.com/v1/example/route/static
三层: http://yaf-skel.com/example/route/static
两层: http://yaf-skel.com/route/static
注：
- v1: 配置文件中配置的 'application.baseUri' 值
- example: 模块名
- route: 控制器名（RouteController）
- static：action名（staticAction）
- 两层无模块路径，查找默认controller下的控制器(app/controller/route)
```
### simple路由协议
- 需在bootstrap初始化,开启simple路由协议
```
//http://yaf-skel.com/index.php?m=example&c=route&a=simple
$router = $dispatcher->getRouter();
$route = new Yaf\Route\Simple("m","c","a");
$router->addRoute('name', $route);
```
### supervar路由协议
- 开启supervar路由协议
```
//http://yaf-skel.com/index.php?r=/example/route/supervar
$router = $dispatcher->getRouter();
$route = new Yaf\Route\Supervar('r');
$router->addRoute('name', $route);
```
### rewrite路由协议
```
//开启rewrite路由协议
//http://yaf-skel.com/product/iphone
$router = $dispatcher->getRouter();
$route = new Yaf\Route\Rewrite(
    '/product/:name',
    [
        'module' => 'example',
        'controller' => 'route',
        'action' => 'rewrite'
    ]
);
$router->addRoute('name', $route);
```
###
```
//开启regex路由协议
//http://yaf-skel.com/product/1/2?a=1
$router = $dispatcher->getRouter();
$route = new Yaf\Route\Regex(
    '/product\/([\d]+)\/([\d]+)/',
    [
        'module' => 'example',
        'controller' => 'route',
        'action' => 'regex'
    ],
    [
        1 => 'id',
        2 => 'tag_id'
    ]
);
$router->addRoute('name', $route);
```
