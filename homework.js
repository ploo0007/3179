//var vg_1 = "homework.json";
//vegaEmbed("#choropleth", vg_1).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
//}).catch(console.error);


const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 1000,
    "height": 600,
    "title": "Ratio of Visitors",
    "projection": {"type": "equalEarth"},
    "layer": [
        {
            "data": {
                "url": "https://raw.githubusercontent.com/JiazhouLiu/FIT3179/main/VegaLite/2_symbol_map/js/ne_110m_admin_0_countries.topojson",
                "format": {"type": "topojson", "feature": "ne_110m_admin_0_countries"}
            },
            "mark": {"type": "geoshape", "fill": "lightgray", "stroke": "white"}
        },
        {
            "data": {
                "url": "https://raw.githubusercontent.com/ploo0007/3179/main/merged_again.csv"
            },
            "mark": {"type": "circle", "tooltip": {"content": "data"}},
            "encoding": {
                "longitude": {"field": "longitude", "type": "quantitative"},
                "latitude": {"field": "latitude", "type": "quantitative"},
                "size": {
                    "field": "length_stay",
                    "type": "quantitative",
                    "title": "Length of Stay",
                    "scale": {"domain": [1, 12]}
                },
                "color": {
                    "field": "visitors",
                    "type": "quantitative",
                    "title": "Visitors ratio",
                    "scale": {"domain": [0, 1], "scheme": "reds"}
                }
            }
        }
    ]
};

const spec2 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": { "text": "Personal Travels by Country (1996-2016)" },
    "width":800,
    "data": {"url": "https://raw.githubusercontent.com/ploo0007/3179/main/merged_personal.csv"},
    "transform": [
      {
        "filter": {
          "field": "Entity",
          "oneOf": ["South Korea", "Japan", "Brazil", "Singapore","Canada","France","India","Indonesia","Ireland",
        "Israel","Italy","Laos","Maldives","Mexico","Myanmar","New Zealand","Philippines","South Africa",
        "Sri Lanka","Taiwan","Turkey","United Kingdom"]
        }
      },
      {
        "filter": {
          "field": "Year",
          "oneOf": [1996, 2016]
        }
      },
      {"filter": "Entity_selection == null || datum.Entity == Entity_selection"}
    ],
    "params": [
        {
        "name": "Entity_selection",
        "bind": {
            "input": "select",
            "options": [
            null,
            "South Korea", "Japan", "Brazil", "Singapore","Canada","France","India","Indonesia","Ireland",
        "Israel","Italy","Laos","Maldives","Mexico","Myanmar","New Zealand","Philippines","South Africa",
        "Sri Lanka","Taiwan","Turkey","United Kingdom"
            ],
            "labels":[
            "Show All",
            "South Korea", "Japan", "Brazil", "Singapore","Canada","France","India","Indonesia","Ireland",
        "Israel","Italy","Laos","Maldives","Mexico","Myanmar","New Zealand","Philippines","South Africa",
        "Sri Lanka","Taiwan","Turkey","United Kingdom"
            ],
            "name": "Entity Selection: "
            }
            }
            ],
        
    "encoding": {
      "x": {
        "field": "Personal",
        "type": "quantitative",
        "title": "Number of Personal Travels"
      },
      "y": {
        "field": "Entity",
        "type": "nominal",
        "title": "Countries",
        "axis": {
          "offset": 10,
          "ticks": false,
          "minExtent": 70,
          "domain": false
        }
      },
  
      "tooltip": [
        {"field": "Entity", "type": "nominal"},
        {"field": "Year", "type": "nominal", "format": ","},
        {"field": "Personal", "type": "quantitative", "format": ","}]
    },
    "layer": [
      {
        "mark": "line",
        "encoding": {
          "detail": {
            "field": "Entity",
            "type": "nominal"
          },
         
          "color": {"value": "#db646f"}
        }
      },
      {
        "mark": {
          "type": "point",
          "filled": true
        },
        "encoding": {
          "color": {
            "field": "Year",
            "type": "ordinal",
            "scale": {
              "domain": [1996, 2016],
              "range": ["#e6959c", "#911a24"]
            },
            "title": "Year"
          },
          "size": {"value": 100},
          "opacity": {"value": 1}
        }
      },
      {
        "mark": {
          "type": "text",
          "align": "left",
          "baseline": "middle",
          "dx": 5,
          "dy": 1
        },
        "encoding": {
          "y": {
            "field": "Entity",
            "type": "nominal"
          },
          "text": {
            "condition": {
              "test": "datum.Entity === 'Turkey' && datum.Year === 2016",
              "value": "The number of tourists in Turkey is experiencing the fastest growth"
            }
          }
        }
      }
    ]
  };

// Embed the visualization in the "vis" div
vegaEmbed("#vis", spec);
vegaEmbed("#vis",spec2);
