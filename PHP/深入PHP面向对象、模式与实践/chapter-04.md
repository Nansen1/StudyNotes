## 第4章 高级特性
### 静态方法和属性 ###
* 通过类而不是对象来访问数据和功能
* 不能在对象中调用静态方法，不能在静态方法中使用`$this`
* 如果方法中没有使用任何实例的属性和方法，可以定义为`static`

### 常量属性 ###
* 语法：只能用大小字母，不需要美元符号
```php
const AVAILABLE = 0;
```
* 只能通过类访问，不能通过类的实例

### 抽象类 ###
抽象类中只定义（**或部分实现**）子类的方法
```php
abstract class ShopProductWriter{
  protected $products = [];
  public function addProduct(ShopProduct $shopProduct){
    $this->products[] = $shopProduct;
  }
  abstract public function write();
}
```
* 关键字：`abstract`
* 注意：
  * 抽象类不能实例化
  * 抽象方法不能在抽象类中实现
  * 子类必须实现所有抽象方法

### 接口 ###
接口在实际开发过程中最大好处是，你可以按照设计，先把接口写好，然后分配大伙干活的时候，告诉a们去用写好的接口去实现他们的具体功能，而告诉b们，去写那些已经写好但是没有具体的代码的接口，这样可以提高工作效率。并且底层和应用也通过接口做了一个很明显的分层。
* 作用
  https://baijiahao.baidu.com/s?id=1595511474536870490&wfr=spider&for=pc
  https://blog.csdn.net/fenglibing/article/details/2745123
