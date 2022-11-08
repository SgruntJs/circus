import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuExpanded = false;
  @ViewChild('navbar') navbar!: ElementRef

  ngOnInit() {

  }


  toggleMenu() {
    setTimeout(() => {
      this.menuExpanded = !this.menuExpanded;
    }, 0);
  }

  @HostListener('window:click', ['$event'])
  listenToOutsideClick(event: PointerEvent) {
    const target = event.target as HTMLElement;
    const isToggler = target.getAttribute('id') === 'navbarDropdown'
    if (!this.menuExpanded || isToggler) {
      return;
    }

    this.menuExpanded = false;
  };

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: Event) {
    this.navbar.nativeElement.classList.toggle("sticky", window.scrollY > 0);
  }

}
