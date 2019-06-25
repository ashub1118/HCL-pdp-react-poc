 <script id="aqs-flyout-template" type="text/x-handlebars-template"> 
<div id="aqs-flyout" class="aqs-flyout">
    {{#switch type}}
        {{#case 'product-series' 'category' 'part-number'}}
            {{#each docs}}
                {{#if this.feature}}
                <div class="type-highlight">
                    <div class="highlight-wrapper">
                        <h6>{{this.feature.taxonomy}}</h6>
                        <h3>{{this.feature.name}}</h3>
                    </div>
                    {{#if this.feature.isPartButtonHide}}
                    <a class="btn btn-white btn-default btn-xs-block dbl-line-btn pull-right" style="display:none" href="{{this.feature.url}}">{{this.feature.translationsAQS.viewMLV}}</a>
                        {{else}}
                    <a class="btn btn-white btn-default btn-xs-block dbl-line-btn pull-right"  href="{{this.feature.url}}">{{this.feature.translationsAQS.viewMLV}}</a>
                    {{/if}}
                </div>
                {{/if}}
            {{/each}}
        {{/case}}
        
        {{#case 'category-group'}}
            {{#each docs}}
                {{#if this.feature}}
                <div class="category-group">
                    <div class="type-highlight">
                        <h6>{{this.feature.taxonomy}}</h6>
                        <h3>{{this.feature.name}}</h3>
                    </div>
                    <div class="desc-wrapper">
                        <div class="description">
                            {{#if this.feature.img}}
                                <img class="thumbnail" src="{{this.feature.img}}"/>
                            {{/if}}
                            <div class="desc">
                            {{this.feature.desc}}
                            </div>
                        </div>
                        <div class="action">
                            <a class="btn btn-white btn-default btn-xs-block dbl-line-btn pull-right" href="{{this.feature.url}}">{{this.feature.translationsAQS.viewCategoryMLV}}</a>
                        </div>
                    </div>
                </div>
                {{/if}}
            {{/each}}
        {{/case}}
        
        {{#default}}{{/default}}
        
    {{/switch}}
    {{#compare 'category-group' '!==' type}}
        {{#each docs}}
            {{#if this.standard}}
                <div class="type-standard">
                    <a href="{{this.standard.url}}">
                    <div class="desc-wrapper">
                        <div class="description">
                            {{#if this.standard.img}}
                                <img class="thumbnail" src="{{this.standard.img}}"/>
                            {{/if}}
                            
                            <p>{{this.standard.name}}</p>
                            
                            {{#if this.standard.partnum}}
                                <h6>{{this.standard.translationsAQS.partMLV}} #:{{this.standard.partnum}}</h6>
                            {{/if}}
                            {{#if this.standard.parts}}
                                <h6>{{this.standard.parts}} {{this.standard.translationsAQS.partMLV}}</h6>
                            {{/if}}
                        </div>
                        <a class="btn btn-white btn-default btn-xs-block dbl-line-btn pull-right" href="{{this.standard.url}}">{{this.standard.translationsAQS.viewMLV}}</a>
                    </div>
                    </a>
                </div>
            {{/if}}
        {{/each}}
    {{/compare}}	
    {{#orCond type 'category' '||' 'product-series'  }}
            {{#each docs}}
            {{#if this.feature}}		
                {{#if this.feature.footerViewDesc}}
                    <a href="{{this.feature.url}}">
                    <div class="footer-aqs">{{this.feature.footerViewDesc}}</div>
                    </a>	
                {{/if}}
            {{/if}}
            {{/each}}
    {{/orCond}}	
    
</div>

 </script>