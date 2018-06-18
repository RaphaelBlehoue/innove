<?php
/**
 * Created by IntelliJ IDEA.
 * User: raphael
 * Date: 16/06/2018
 * Time: 10:26
 */

namespace App\Lib;

use Twig\Environment;

class MailManager
{
    /**
     * @var \Swift_Mailer
     */
    private $mailer;

    /**
     * @var \Twig_Environment
     */
    private $twig;

    public function __construct(\Swift_Mailer $mailer, Environment $twig)
    {
        $this->mailer = $mailer;
        $this->twig = $twig;
    }

    /**
     * @param $template
     * @param $parameters
     * @param $to
     * @param $from
     * @param null $fromName
     * @param null $Bcc
     * @return int|string
     * @throws \Twig_Error_Loader
     * @throws \Twig_Error_Runtime
     * @throws \Twig_Error_Syntax
     */
    public function sendEmail($template, $parameters, $to, $from, $fromName = null, $Bcc = null)
    {
        $template = $this->twig->loadTemplate('email/'. $template.'.html.twig');
        $subject = $template->renderBlock('subject', $parameters);
        $body_html = $template->renderBlock('body_html', $parameters);
        $body_text = $template->renderBlock('body_text', $parameters);
        try {
            $message = (new \Swift_Message($subject))
                ->setFrom($from, $fromName)
                ->setTo($to)
                ->setBcc($Bcc)
                ->setCharset('utf-8')
                ->setBody($body_html, 'text/html')
                ->addPart($body_text, 'text/plain')
            ;
            $response = $this->mailer->send($message);
        } catch (\Exception $ex) {
            return $ex->getMessage();
        }
        return $response;
    }

}