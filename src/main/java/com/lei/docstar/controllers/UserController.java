package com.lei.docstar.controllers;

import com.lei.docstar.models.User;
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
    public User getUserByID(@PathVariable String uid) {
        return userService.findById(uid);
    }


    @RequestMapping(value = "/docstar/api/v1/{uid}", method = RequestMethod.PUT)
    public User updateUserByID(@PathVariable String uid , @RequestBody User user) throws BadRequestException {


        return user;
        //        System.out.println(User.get_id());
//        if( User.get_id().equals(uid) ) {
//            return userService.updateUser(User);
//        } else {
//            throw new BadRequestException();
//        }

    }

}
