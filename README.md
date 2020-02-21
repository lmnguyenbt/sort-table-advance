<h2>
	For the latest Angular, added sort-table directive, use for the latest angular2 or above versions
</h2>

Angular directive for simple data sort order on table. 
<a href="https://github.com/lmnguyenbt/sort-table-advance">Sort Table Advance</a>

And add table service.
<a href="https://github.com/lmnguyenbt/table-service-for-ngb-paging">Table Service</a>

First you need to create html:
```html
<table class="table table-bordered">
    <thead class="bg-grayish">
        <tr>
            <th class="sort" sortable-column [sortKey]="'sort key name'" [sortParams]="{sort_key: sort_key_default, sort_direction: 'desc'}"
                (sortFunc)="tableService.sortAction($event)"
                [columnName]="column head name"></th>
            <th class="sort" sortable-column [sortKey]="'sort key name'" [sortParams]="{tableService.sort_key, tableService.sort_direction}"
                            (sortFunc)="tableService.sortAction($event)"
                            [columnName]="column head name"></th>
        </tr>
    </thead>
</table>
