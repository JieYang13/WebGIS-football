function pass(name){
    var scaleh = d3.scale.linear();
    var scalev = d3.scale.linear();
    var width = 1150,
        height = 720;

    function fx(d) { return d.x; };
    function fy(d) { return d.y; };

    var rollup = d3.rollup()
        .x(function(d) { return fx(d); })
        .y(function(d) { return fy(d); });

//var svg;

    d3.xml("else/field.svg", function(xml) {

        var dom = document.getElementById(name);
        dom.innerHTML= "";
        // svgdom = document.body.appendChild(xml.documentElement);
        var ximdiv = xml.documentElement;
        ximdiv.style.width = dom.style.width;
        ximdiv.style.length = dom.style.length;
        svgdom = dom.append(ximdiv);

        var svg = d3.select("svg");
        var defs = d3.select("defs");


        scaleh.domain([0, width]);
        scaleh.range([0, 1268]);
        scalev.domain([0, height]);
        scalev.range([0, 808]);


        d3.json("src/players.json", function(json) {

            datap = json.nodes;

            var datap_start = datap.filter( function (el){
                return el.Status == "starting"; });

            json.nodes = datap_start;
            var graph = rollup(json);

            var link = svg.selectAll(".link")
                .data(graph.links)
                .enter().append("g")
                .attr("class", "linkg");

            svg.selectAll(".linkg")
                .data(graph.links)
                .append("path")
                .attr("class", function(d) {
                    return "link " + "from" + d.source.nodes[0].Number + " to" + d.target.nodes[0].Number;
                })
                .attr("id" ,function(d) {
                    return "link" + "from" + d.source.nodes[0].Number + "to" + d.target.nodes[0].Number;
                })
                .attr("d", function(d) {
                    var sx = d.source.x, sy = d.source.y,
                        tx = d.target.x, ty = d.target.y,
                        dx = tx - sx, dy = ty - sy,
                        dr = 2 * Math.sqrt(dx * dx + dy * dy);
                    return "M" + sx + "," + sy + "A" + dr + "," + dr + " 0 0,1 " + tx + "," + ty;
                })
                .style("stroke", "grey")
                .style("stroke-width", function(d) {
                    return d.value * 2;
                });

            var node = svg.selectAll(".node")
                .data(graph.nodes)
                .enter().append("g")
                .attr("class", "node")
                .style("pointer-events", "all")
                .append("circle")
                .attr("cx", function(d, i){
                    return d.x})
                .attr("cy", function(d, i){ return d.y})
                .attr("r", 15)
                .attr("filter","url(#f3)")
                .style("fill", "white")
                .style("stroke", "blue")
                .style("stroke-width", "2")
                .on("mouseover", function(d) {

                    var xPosition = scaleh(50 + parseFloat(d3.select(this).attr("cx")));
                    var yPosition = scalev(10 + parseFloat(d3.select(this).attr("cy")));

                    d3.selectAll(".to" + d.nodes[0].Number + ":not(.pathlabel)")
                        .transition()
                        .duration(10)
                        .style("stroke", "orange")
                        .style("display", "block")
                        .style("stroke-opacity", ".7")
                    ;

                    d3.selectAll(".from" + d.nodes[0].Number + ":not(.pathlabel)")
                        .transition()
                        .duration(10)
                        .style("stroke", "blue")
                        .style("display", "block")
                        .style("stroke-opacity", ".7")
                    ;

                    d3.selectAll(".pathlabel.to" + d.nodes[0].Number)
                        .style("fill", "orange")
                        .style("stroke", "white")
                        .style("display", "block");

                    d3.selectAll(".pathlabel.from" + d.nodes[0].Number)
                        .style("fill", "blue")
                        .style("stroke", "white")
                        .style("display", "block");

                    d3.select(this).style("fill", "LightGoldenRodYellow");

                    d3.select("#tooltip")
                        .style("left", xPosition + "px")
                        .style("top", yPosition + "px")
                        .select("#name")
                        .text(d.nodes[0].name);

                    d3.select("#tooltip")
                        .select("#number")
                        .text(d.nodes[0].Number);

                    d3.select("#tooltip")
                        .select("#pos")
                        .text(d.nodes[0].Position);

                    d3.select("#tooltip").classed("hidden", false);

                })
                .on("mouseout", function(d) {

                    d3.selectAll(".to" + d.nodes[0].Number + ":not(.pathlabel)")
                        .style("stroke", "grey")
                        .style("stroke-opacity", ".2");

                    d3.selectAll(".from" + d.nodes[0].Number + ":not(.pathlabel)")
                        .style("stroke", "grey")
                        .style("stroke-opacity", ".2");

                    d3.selectAll(".pathlabel")
                        .style("fill", "grey")
                        .style("display", "none");

                    d3.select("#tooltip").classed("hidden", true);
                    d3.select(this).style("fill", "white");
                });

            svg.selectAll(".node")
                .data(graph.nodes)
                .append("text")
                .text(function(d, i) {
                    return d.nodes[0].Number;
                })
                .attr("x", function(d, i) {
                    return d.x;
                })
                .attr("y", function(d, i) {
                    return d.y ;
                })
                .style("font-family", "sans-serif")
                .style("font-size", "11px")
                .style("text-anchor", "middle")
                .style("dominant-baseline", "central")
                .style("stroke", "black")
                .style("pointer-events", "none");

            svg.selectAll("textpaths")
                .data(graph.links)
                .enter()
                .append("text")
                .style("font-size", "12px")
                .attr("class", "texts")
                .attr("x", "0")
                .attr("y", "0")
                .append("textPath")
                .attr("class", function(d) {
                    return "pathlabel " + "from" + d.source.nodes[0].Number + " to" + d.target.nodes[0].Number;
                })
                .attr("xlink:href", function(d) {
                    return '#' + "link" + "from" + d.source.nodes[0].Number + "to" + d.target.nodes[0].Number
                })
                .text(function(d) {
                    return d.value;
                })
                .attr("startOffset", "40%")
                .style("stroke", "black")
                .attr("filter","url(#f3)")
                .style("fill", "white")
                .style("font-family", "sans-serif")
                .style("display", "none");

        });
    });
}