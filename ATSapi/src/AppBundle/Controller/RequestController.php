<?php
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\View\ViewHandler;
use FOS\RestBundle\View\View;
use AppBundle\Entity\URequest;

class RequestController extends Controller
{

    /**
     * @Rest\View()
     * @Rest\Get("/requests")
     */
    public function getRequestsAction(Request $request)
    {
        $URequests = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:URequest')
                ->findAll();

        return $URequests;
    }

    /**
     * @Rest\Get("/requets/{id}")
     */
    public function getRequestAction(Request $request)
    {
        $URequest = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:URequest')
                ->find($request->get('URequest_id'));
        /* @var $URequest URequest */

        if (empty($URequest)) {
            return new JsonResponse(['message' => 'URequest not found'], Response::HTTP_NOT_FOUND);
        }

        return $URequest;
    }
}