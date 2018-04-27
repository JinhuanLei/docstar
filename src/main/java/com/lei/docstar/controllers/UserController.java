package com.lei.docstar.controllers;

import com.lei.docstar.models.test;
import com.lei.docstar.models.user;
import com.lei.docstar.security.BadRequestException;
import com.lei.docstar.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ModelAndView index() {
        return new ModelAndView("index.html");
    }



    @RequestMapping(value = "/docstar/api/v1/{uid}", method = RequestMethod.GET)
    public user getUserByID(@PathVariable String uid) {
        return userService.findById(uid);
    }


    @RequestMapping(value = "/docstar/api/v1/{uid}", method = RequestMethod.PUT)
    public user updateUserByID(@PathVariable String uid ,@RequestBody user user) throws BadRequestException {


        return user;
        //        System.out.println(user.get_id());
//        if( user.get_id().equals(uid) ) {
//            return userService.updateUser(user);
//        } else {
//            throw new BadRequestException();
//        }

    }

}
