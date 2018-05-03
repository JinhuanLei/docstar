package com.lei.docstar.models;

import java.util.List;

public class Result {
    private int count;
    private String description;
    private int total_pages;
    private String next_page_url;
    private String previous_page_url;
    private List<Document> results;

    public String getPrevious_page_url() {
        return previous_page_url;
    }

    public void setPrevious_page_url(String previous_page_url) {
        this.previous_page_url = previous_page_url;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getTotal_pages() {
        return total_pages;
    }

    public void setTotal_pages(int total_pages) {
        this.total_pages = total_pages;
    }

    public String getNext_page_url() {
        return next_page_url;
    }

    public void setNext_page_url(String next_page_url) {
        this.next_page_url = next_page_url;
    }

    public List<Document> getResults() {
        return results;
    }

    public void setResults(List<Document> results) {
        this.results = results;
    }
}
