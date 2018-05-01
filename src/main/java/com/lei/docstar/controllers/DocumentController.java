package com.lei.docstar.controllers;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lei.docstar.models.Result;
import org.apache.http.HttpEntity;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

@RestController
public class DocumentController {

    private String getDocuments(String query) throws URISyntaxException, ClientProtocolException, IOException {
//        int id = (int)(Math.random() * 30 + 1 );
        URI uri = new URIBuilder()
                .setScheme("https")
                .setHost("www.federalregister.gov")
                .setPath("/api/v1/articles.json"+query)
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


    public Result toDocumentsObj(String swapi ) throws JsonParseException, JsonMappingException, IOException {
        ObjectMapper mapper = new ObjectMapper()
                .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        return mapper.readValue( swapi, Result.class );
    }

    @RequestMapping(value="/documents", method=RequestMethod.GET)
    public Result fakeThingAsObject( ) throws ClientProtocolException, URISyntaxException, IOException {
        String value = getDocuments("");
        return toDocumentsObj( value );
    }

}
