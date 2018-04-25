package com.lei.docstar.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class UserController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ModelAndView index() {
        return new ModelAndView("index.html");
    }

    @RequestMapping(value = "/docstar/api/v1/login", method = RequestMethod.POST)
    public ModelAndView login() {
        return new ModelAndView("index.html");
    }



}
