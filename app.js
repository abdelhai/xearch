(function (){
    'use strict';
    var search = instantsearch({
      appId: '4UJ3KO038F',
      apiKey: '3caa2ac017744a9af13b635443e7b7a0',
      indexName: 'test_se_com',
      urlSync: true
    });

    search.addWidget(
      instantsearch.widgets.searchBox({
        container: '#query',
        placeholder: 'getting started with flask'
      })
    );

    var hitTemplate = `
      <div class="result">
        <h2 class="result-title"><a href="https://ai.stackexchange.com/questions/{{Id}}" target="_blank" class="link">{{{ShortTitle}}}</a></h2>
        <div class="result-url">https://ai.stackexchange.com/questions/{{Id}}</div>
        <p class="paragraph">{{Excerpt}}</p>
      </div>
    `


    search.addWidget(
      instantsearch.widgets.hits({
        container: '#results',
        hitsPerPage: 10,
        templates: {
          empty: '<p><strong>xearch:</strong> The search engine for developers.</p>',
          item: hitTemplate
        }
      })
    );

    search.addWidget(
      instantsearch.widgets.pagination({
        container: '#pagination',
        cssClasses: {
          active: 'active'
        },
        showFirstLast: false
      })
    );
    search.start();

})();