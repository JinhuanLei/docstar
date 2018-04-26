package com.lei.docstar.repositories;


import com.lei.docstar.models.user;
import org.springframework.data.mongodb.repository.MongoRepository;



public interface UserRepository extends MongoRepository<user, String> {
    public user findByUsername(String username );
}