# 对象注册表Registry
- 全局存储对象
- 在bootstrap中可将config存储
```php
Yaf\Registry::set('test', ['username' => 'Peter']);
var_dump(Yaf\Registry::get('test'));
var_dump(Yaf\Registry::has('test'));
var_dump(Yaf\Registry::del('test'));
var_dump(Yaf\Registry::has('test'));
var_dump(Yaf\Registry::get('phpcasts')); // NULL

public function _initConfig()
{
    // 保存配置
    $this->config = Application::app()->getConfig()->toArray();
    Registry::set('config', $this->config);
}
var_dump(Yaf\Registry::get('config'));
```