<?php

class UserController Extends Yaf_Controller_Abstract
{
    public function init()
    {
        Yaf_Dispatcher::getInstance()->disableView();
    }

    /**
     * @param $uid
     */
    public function testAction()
    {
        //http://localhost/user/test/uid/1
        // var_dump($uid == $this->getRequest()->getParam('uid')); //true
        // $this->redirect('/login');
        $this->forward('login');
    }

    public function loginAction()
    {
        //只能通过getParam获取forward传过来的参数
        echo 'login:' . $this->getRequest()->getParam('uid');
    }

}