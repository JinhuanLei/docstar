package com.lei.docstar;

import com.mongodb.MongoClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;

import java.net.UnknownHostException;

@Configuration
public class MongoConfig {
	public @Bean
    MongoClient mongo() throws UnknownHostException {
		return new MongoClient("localhost");
	}
	
	public @Bean
    MongoTemplate mongoTemplate() throws Exception {
		return new MongoTemplate( mongo(), "docstar");
	}
	
    
}
