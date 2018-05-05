package com.lei.docstar.controllers;

import com.lei.docstar.models.DocumentList;
import com.lei.docstar.services.DocumentListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
public class ListController {

    @Autowired
    DocumentListService documentListService;

    @RequestMapping(value = "/docstar/api/v1/list", method = RequestMethod.POST)
    public DocumentList createList(DocumentList d) {

        return documentListService.createLists(d);
    }
}
