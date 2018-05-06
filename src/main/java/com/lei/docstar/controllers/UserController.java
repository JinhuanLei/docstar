package com.lei.docstar.controllers;

import com.lei.docstar.models.Test;
import com.lei.docstar.models.User;
import com.lei.docstar.security.BadRequestException;
import com.lei.docstar.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.security.config.authentication.PasswordEncoderParser;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import java.security.Principal;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;


    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ModelAndView index() {
        return new ModelAndView("index.html");
    }

//    @RequestMapping(value = "/docstar/api/v1/login", method = RequestMethod.POST)
//    public UserDetails Login(@RequestParam(value = "username") String username,@RequestParam(value = "password") String password) {
////        System.out.println(username);
//        return userService.loadUserByUsername(username);
//    }
    @Autowired
PasswordEncoder encoder;

    @RequestMapping(value = "/docstar/api/v1/login", method = RequestMethod.POST)
    public UserDetails Login(@RequestBody User user, HttpSession session) throws BadRequestException {


        UserDetails u=userService.loadUserByUsername(user.getUsername());
        if(encoder.matches(user.getPassword(), u.getPassword())){
            session.setAttribute("user",u);
            return u;
        }else {
            throw new BadRequestException();
        }

    }

    @RequestMapping(value = "/docstar/api/v1/logout", method = RequestMethod.POST)
    public String Logout(HttpSession session) {
        session.invalidate();
        return "session destroy";
    }
    @RequestMapping(value = "/docstar/api/v1/user", method = RequestMethod.GET)
    public UserDetails CheckUser(HttpSession session) throws BadRequestException {
        UserDetails u=(UserDetails)session.getAttribute("user");
        if(u!=null){
            return u;
        }else {
            throw new BadRequestException();
        }
    }
    @RequestMapping(value = "/docstar/api/v1/users", method = RequestMethod.GET)
    public List<User> getUsers()
    {
        return userService.findAll();
    }

    @RequestMapping(value = "/docstar/api/v1/{uid}", method = RequestMethod.GET)
    public User getUserByID(@PathVariable String uid) {
        return userService.findById(uid);
    }

    @RequestMapping(value="/user", method=RequestMethod.GET)
    @Nullable
    public UserDetails getUser(Principal p ) {
        if( p == null || p.getName() == null ) return null;
        return userService.loadUserByUsername( p.getName() );
    }

    @RequestMapping(value = "/docstar/api/v1/{uid}", method = RequestMethod.PUT)
    public User updateUserByID(HttpSession session,@PathVariable String uid , @RequestBody User user) throws BadRequestException {


//        return user;

        if( user.get_id().equals(uid) ) {
            User newuser=userService.updateUser(user);
                    session.setAttribute("user",newuser);
            return newuser;
        } else {
            throw new BadRequestException();
        }

    }

}
