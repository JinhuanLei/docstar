package com.lei.docstar.controllers;

import org.apache.http.HttpEntity;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

@RestController
public class DocumentController {

    private String getDocuments() throws URISyntaxException, ClientProtocolException, IOException {
//        int id = (int)(Math.random() * 30 + 1 );
        URI uri = new URIBuilder()
                .setScheme("https")
                .setHost("www.federalregister.gov")
                .setPath("/api/v1/articles.json")
                .build();
        HttpGet httpget = new HttpGet(uri);

        CloseableHttpClient client = HttpClients.createDefault();
        CloseableHttpResponse response = client.execute( httpget );

        String result = null;
        try {
            HttpEntity e = response.getEntity();
            result = EntityUtils.toString( e );
        } finally {
            response.close();
        }
        return result;
    }

}
