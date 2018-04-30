package com.lei.docstar.repositories;


import com.lei.docstar.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;



public interface UserRepository extends MongoRepository<User, String> {
    public User findByUsername(String username );
}