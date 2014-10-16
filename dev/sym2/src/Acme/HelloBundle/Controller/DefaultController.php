<?php

namespace Acme\HelloBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    public function indexAction()
    {
        //return new Response("{'data':'chitemmuort'}");
        $response = new Response(json_encode(array('data' => 'chitemmuort')));
        $response->headers->set('Content-type', 'application/json');
        return $response;
        
//$this->render('AcmeHelloBundle:Default:index.html.twig', array('name' => "ciuciamelo"));
    }
}
