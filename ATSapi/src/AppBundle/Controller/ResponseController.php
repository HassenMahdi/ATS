<?php
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\View\ViewHandler;
use FOS\RestBundle\View\View;
use FOS\RestBundle\Controller\Annotations as Rest; // alias pour toutes les annotations

class RequestController extends Controller{

    /**
     * @Rest\View()
     * @Rest\Get("/responses")
     */
    public function getResponsesAction(Request $request)
    {
        //TODO
    }

    /**
     * @Rest\View()
     * @Rest\Get("/responses/request/{request_id}")
     */
    public function getResponseForRequestAction(Request $request)
    {
        //TODO
    }

    /**
     * @Rest\View()
     * @Rest\Get("/responses/{response_id}")
     */
    public function getResponseAction(Request $request)
    {
        //TODO
    }

}