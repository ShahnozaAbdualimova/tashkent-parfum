interface Categories {
    "links": {
        "next": string | null,
        "previous": string | null
      },
      "page_size": number,
      "current_page": number,
      "total_pages": number,
      "page_items": number,
      "total": number,
      "results": [
        {
          "id": number ,
          "title": String,
          "parent_id": string | null,
          "icon_src": {
            "default": string | null,
            "medium": string | null,
            "small": string | null,
          } 
        }
      ]
}