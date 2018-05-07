package com.lei.docstar.models;

import java.util.List;

public class Document{
    private String title;
    private String type;
    private String document_number;
    private String html_url;
    private String pdf_url;
    private String public_inspection_pdf_url;
    private String publication_date;
    private String excerpts;
    private List<Agency> agencies;
    private String review;

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDocument_number() {
        return document_number;
    }

    public void setDocument_number(String document_number) {
        this.document_number = document_number;
    }

    public String getHtml_url() {
        return html_url;
    }

    public void setHtml_url(String html_url) {
        this.html_url = html_url;
    }

    public String getPdf_url() {
        return pdf_url;
    }

    public void setPdf_url(String pdf_url) {
        this.pdf_url = pdf_url;
    }

    public String getPublic_inspection_pdf_url() {
        return public_inspection_pdf_url;
    }

    public void setPublic_inspection_pdf_url(String public_inspection_pdf_url) {
        this.public_inspection_pdf_url = public_inspection_pdf_url;
    }

    public String getPublication_date() {
        return publication_date;
    }

    public void setPublication_date(String publication_date) {
        this.publication_date = publication_date;
    }

    public String getExcerpts() {
        return excerpts;
    }

    public void setExcerpts(String excerpts) {
        this.excerpts = excerpts;
    }

    public List<Agency> getAgencies() {
        return agencies;
    }

    public void setAgencies(List<Agency> agencies) {
        this.agencies = agencies;
    }
}
