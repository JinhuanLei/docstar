package com.lei.docstar.repositories;

import com.lei.docstar.models.DocumentList;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DocumentListRepository extends MongoRepository<DocumentList, String> {

}
