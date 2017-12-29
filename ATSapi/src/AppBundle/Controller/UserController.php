<?php
namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations\Get;
use AppBundle\Entity\User;

class UserController extends Controller
{
    /**
     * @Get("/users")
     */
    public function getUsersAction(Request $request)
    {
        // ...
    }

    /**
     * @Get("/users/{user_id}")
     */
    public function getUserAction(Request $request)
    {
        // ...
    }
}