<?php

namespace Acme\HelloBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return new Response("{'data':'chitemmuort'}");
//$this->render('AcmeHelloBundle:Default:index.html.twig', array('name' => "ciuciamelo"));
    }
}
