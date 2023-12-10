import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: SearchbarComponent,
    multi:true
  }]
})
export class SearchbarComponent implements ControlValueAccessor{
  searchQuery: any;

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(obj: any): void {
    this.searchQuery = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;    
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;    
  }
  setDisabledState(isDisabled: boolean): void {
  }

  setValue(o: any){
    const {value} = o;

    this.searchQuery = value;

    this.onChange(value);
    this.onTouched();
  }
}
