package com.lei.docstar.controllers;

import com.lei.docstar.models.DocumentList;
import com.lei.docstar.services.DocumentListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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


    @RequestMapping(value = "/docstar/api/v1/list/{lid}", method = RequestMethod.GET)
    public DocumentList getListById(@PathVariable String lid) {

        return documentListService.findById(lid);
    }

    @RequestMapping(value = "/docstar/api/v1/list", method = RequestMethod.PUT)
    public DocumentList updateList(@RequestBody DocumentList d) {

        return documentListService.updateList(d);
    }

    @RequestMapping(value = "/docstar/api/v1/list/reviewer", method = RequestMethod.GET)
    public List<DocumentList> getListByReviewer(@RequestParam String reviewer) {
        return documentListService.fingByReviewer(reviewer);
    }

}
