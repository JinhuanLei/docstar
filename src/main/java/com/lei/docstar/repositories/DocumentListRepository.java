package com.lei.docstar.repositories;

import com.lei.docstar.models.DocumentList;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface DocumentListRepository extends MongoRepository<DocumentList, String> {

    List<DocumentList> findByReviewer(String reviewer);
}
