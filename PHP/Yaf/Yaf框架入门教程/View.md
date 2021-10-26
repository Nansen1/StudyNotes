### 默认自动寻找默认位置模板
- 位置：application/views/控制器名/action名.phtml
### 设置模板目录
```php
$this->getView()->setScriptPath(APP_PATH . '/templates/');
```
### 为视图引擎分配模板变量（两种）
```php
$this->getView()->assign('title', 'test title');
$this->getView()->assign('content', 'test content');


$data = [
    'title' => 'test title.',
    'content' => 'test content.'
];
$this->getView()->assign($data);
```