package com.lei.docstar.models;

public class Agency {
    private String raw_name;
    private String name;
    private String id;
    private String url;
    private String json_url;
    private String parent_id;
    private String slug;

    public String getRaw_name() {
        return raw_name;
    }

    public void setRaw_name(String raw_name) {
        this.raw_name = raw_name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getJson_url() {
        return json_url;
    }

    public void setJson_url(String json_url) {
        this.json_url = json_url;
    }

    public String getParent_id() {
        return parent_id;
    }

    public void setParent_id(String parent_id) {
        this.parent_id = parent_id;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }
}
