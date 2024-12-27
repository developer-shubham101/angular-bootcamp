Sure! Here’s a list of some commonly used directives in Angular along with brief details about each:

### **Structural Directives:**
1. **`*ngIf`**:
   - **Description**: Conditionally includes a template based on the value of an expression.
   - **Usage**: `<div *ngIf="condition">Content</div>`

2. **`*ngFor`**:
   - **Description**: Repeats a part of the template for each item in a collection.
   - **Usage**: `<div *ngFor="let item of items">{{ item }}</div>`

3. **`*ngSwitch`**:
   - **Description**: Adds or removes DOM subtrees based on the value of a match expression.
   - **Usage**: 
     ```html
     <div [ngSwitch]="value">
       <p *ngSwitchCase="'A'">Case A</p>
       <p *ngSwitchCase="'B'">Case B</p>
       <p *ngSwitchDefault>Default Case</p>
     </div>
     ```

### **Attribute Directives:**
4. **`ngClass`**:
   - **Description**: Adds or removes CSS classes based on an expression.
   - **Usage**: `<div [ngClass]="{'class-name': condition}">Content</div>`

5. **`ngStyle`**:
   - **Description**: Updates styles based on an expression.
   - **Usage**: `<div [ngStyle]="{'color': 'red', 'font-size': '12px'}">Content</div>`

6. **`ngModel`**:
   - **Description**: Provides two-way data binding between form elements and component properties.
   - **Usage**: `<input [(ngModel)]="property">`

7. **`ngModelGroup`**:
   - **Description**: Used to group form controls into nested forms.
   - **Usage**: `<div ngModelGroup="groupName">...</div>`

8. **`ngForm`**:
   - **Description**: Tracks the value and validity of form controls.
   - **Usage**: `<form #form="ngForm">...</form>`

### **Built-in Directives:**
9. **`ngNonBindable`**:
   - **Description**: Tells Angular not to compile or bind the contents of the element.
   - **Usage**: `<div ngNonBindable>{{ variable }}</div>`

10. **`ngTemplateOutlet`**:
    - **Description**: Instantiates a template dynamically.
    - **Usage**: `<ng-container *ngTemplateOutlet="templateRef"></ng-container>`

11. **`ngContainer`**:
    - **Description**: Acts as a grouping element that doesn’t add any extra elements to the DOM.
    - **Usage**: `<ng-container *ngIf="condition">Content</ng-container>`

12. **`ngContent`**:
    - **Description**: Projects content into a component.
    - **Usage**: `<ng-content></ng-content>`

### **Custom Directives:**
13. **Custom Attribute Directive Example**:
    - **Description**: Changes the appearance or behavior of a DOM element.
    - **Usage**:
      ```typescript
      import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

      @Directive({
        selector: '[appHighlight]'
      })
      export class HighlightDirective {
        constructor(private el: ElementRef, private renderer: Renderer2) {}

        @HostListener('mouseenter') onMouseEnter() {
          this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
        }

        @HostListener('mouseleave') onMouseLeave() {
          this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
        }
      }
      ```

This is a concise list, and there are more directives available in Angular for various purposes. If you need more details or examples for any specific directive or how to use them, feel free to ask!
