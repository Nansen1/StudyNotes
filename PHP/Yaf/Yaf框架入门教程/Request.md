### 获取请求参数
```
public function paramsAction()
{
    $request = $this->getRequest();

    echo '<pre>';

    // http://yaf-skel.com/example/request/params?user=test&uid=1

    var_dump($request->get('user'));        // test
    var_dump($request->getQuery());         // ['user' => test, 'uid' => 1]
    var_dump($request->getQuery('user'));   // test
    var_dump($request->getPost());          // empty
    var_dump($request->getPost('user'));    // null

    var_dump($request->getRequestUri());    // /example/request/params
    var_dump($request->getMethod());        // GET
    var_dump($request->getBaseUri());       // ''
    var_dump($request->getCookie());        // emtpy
    var_dump($request->getFiles());         // empty

    // http://yaf-skel.com/example/request/params/user/test/uid/1
    var_dump($request->getParams());         // ['user' => test, 'uid' => 1]
    var_dump($request->getParam('uid'));     // 1
    var_dump($request->getRequestUri());     // /example/request/params/user/test/uid/1

}
```