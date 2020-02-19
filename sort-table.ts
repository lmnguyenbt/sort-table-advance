import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, OnChanges } from '@angular/core';

@Directive( { selector: '[sortable-column]' } )
export class SortColumnDirective implements OnInit {
	private _sortKey: string;
	private _columnName: string;
	private _params: any;
	private _sortDirection: string = '';

	constructor(private el: ElementRef) {

	}

	@Input('sortKey') set sortKey(value: any) {
		if ( value ) {
			this._sortKey = value;
		}
	}

	@Input('columnName') set columnName(value: any) {
		if ( value ) {
			this._columnName = value;
		}
	}

	@Input('sortParams') set sortParams(value: any) {
		if ( value ) {
			this._params = value;
		}
	}

	@Output('sortFunc') sortFunc: EventEmitter<any> = new EventEmitter<any>();

	@HostListener('click') sort() {
		console.log('click');
		this._sortDirection = this._sortDirection === 'asc' ? 'desc' : 'asc';
		this._params = {
			sort_key: this._sortKey,
			sort_direction: this._sortDirection
		};

		this.render();
		this.sortFunc.emit(this._params);
	}

	ngOnInit(): void {
		this.render();
	}

	private render() {
		if ( this._params['sort_key'] && this._params['sort_key'] === this._sortKey ) {
			this.el.nativeElement.innerHTML = (`
                <div style="width: 92%; display: inline-block;">
                    <span>${ this._columnName }</span>
                </div>` + this.sortIcon(this._sortDirection)
			);
		} else {
			this.el.nativeElement.innerHTML = this.sortDefault();
		}
	}

	private sortDefault() {
		return (`
            <div style="width: 92%; display: inline-block;">
                <span>${ this._columnName }</span>
            </div>
            <i class="fa fa-sort" aria-hidden="true" style="text-align: right; opacity : 0.2"></i>
        `);
	}

	private sortIcon(sortDirection) {
		if ( sortDirection === 'asc' ) {
			return `<i class="fa fa-sort-asc" aria-hidden="true"></i>`;
		} else {
			return `<i class="fa fa-sort-desc" aria-hidden="true"></i>`;
		}
	}
}
