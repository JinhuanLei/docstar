package com.lei.docstar.services;


import com.lei.docstar.models.DocumentList;
import com.lei.docstar.models.User;
import com.lei.docstar.repositories.DocumentListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DocumentListService {

    @Autowired
    DocumentListRepository documentListRepository;

    public List<DocumentList> findAll() {
        return documentListRepository.findAll();
    }

    public DocumentList createLists(DocumentList d) {
        return documentListRepository.save(d);
    }

    public DocumentList findById(String lid){
        return documentListRepository.findById(lid).get();
    }

    public DocumentList updateList(DocumentList d){
        return documentListRepository.save(d);
    }
}
