package com.lei.docstar.controllers;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lei.docstar.models.Document;
import com.lei.docstar.models.Result;
import org.apache.http.HttpEntity;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
public class DocumentController {

    private String getDocuments(String path,String query) throws URISyntaxException, ClientProtocolException, IOException {
//        int id = (int)(Math.random() * 30 + 1 );
        URI uri = new URIBuilder()
                .setScheme("https")
                .setHost("www.federalregister.gov")
//                .setPath(path+query)
                .setPath(path)
                .setCustomQuery(query)
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

    public Document toDocumentObj(String swapi ) throws JsonParseException, JsonMappingException, IOException {
        ObjectMapper mapper = new ObjectMapper()
                .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        return mapper.readValue( swapi, Document.class );
    }

    @RequestMapping(value="/documents", method=RequestMethod.GET)
    public Result LoadDocuments( ) throws ClientProtocolException, URISyntaxException, IOException {
//        Result result=null;
//        for(int x=1;x<50;x++){
//            String value = getDocuments("/api/v1/documents.json","?page="+x);
//            Result tempR=toDocumentsObj( value );
//            if(x==1){
//                 result.setResults(tempR.getResults());
//            }else{
//                List<Document> tempD=result.getResults();
//                tempD.addAll(tempR.getResults());
//                result.setResults(tempD);
//            }
//
//        }
//return result;

        String value = getDocuments("/api/v1/documents.json","per_page=1000");
        System.out.println(value);

      return toDocumentsObj( value );
    }

    @RequestMapping(value="/documents/{did}", method=RequestMethod.GET)
    public Document findDocumentByDocumentNumber(@PathVariable String did) throws IOException, URISyntaxException {
        String value=getDocuments("/api/v1/documents/"+did+".json","");
        return toDocumentObj(value);
    }

}
