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

// Embed the visualization in the "vis" div
vegaEmbed("#vis", spec);
