package com.lei.docstar.controllers;

import com.lei.docstar.models.DocumentList;
import com.lei.docstar.services.DocumentListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ListController {

    @Autowired
    DocumentListService documentListService;

    @RequestMapping(value = "/docstar/api/v1/list", method = RequestMethod.POST)
    public DocumentList createList(@RequestBody DocumentList d) {
        System.out.println(d.getDocuments().size());
        return documentListService.createLists(d);
    }

    @RequestMapping(value = "/docstar/api/v1/list", method = RequestMethod.GET)
    public List<DocumentList> getList() {

        return documentListService.findAll();
    }
}
