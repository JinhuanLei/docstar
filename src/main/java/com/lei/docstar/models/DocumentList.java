package com.lei.docstar.models;

import java.util.List;

public class DocumentList {
    private String _id;
    private List<Document> documents;

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public List<Document> getDocuments() {
        return documents;
    }

    public void setDocuments(List<Document> documents) {
        this.documents = documents;
    }
}
