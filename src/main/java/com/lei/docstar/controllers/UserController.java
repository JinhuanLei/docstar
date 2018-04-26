package com.lei.docstar.controllers;

import com.lei.docstar.models.user;
import com.lei.docstar.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ModelAndView index() {
        return new ModelAndView("index.html");
    }


//    @RequestMapping(value = "/docstar/api/v1/login", method = RequestMethod.POST)
//    public user login(@RequestParam String username, @RequestParam String password) {
//           user u=new user();
//        u.setUsername(username);
//        u.setPassword(password);
//        System.out.println(u);
//        return u;
//    }


}
