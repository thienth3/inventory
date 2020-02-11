import { NgModule } from '@angular/core';
import { MatPaginatorModule, MatAutocompleteModule, MatButtonModule,
    MatButtonToggleModule, MatCardModule, MatCheckboxModule,
    MatChipsModule, MatDatepickerModule, MatDialogModule,
    MatExpansionModule, MatGridListModule, MatIconModule,
    MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule,
    MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule,
    MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule,
    MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule,
    MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule,
    MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatFormFieldModule } from '@angular/material';

export const APP_DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
    },
    display: {
        // dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};

export const inportModule = [
    MatFormFieldModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
];

@NgModule({
    imports: [
        ...inportModule
    ],
    exports: [
        ...inportModule
    ],
    providers: [
        // { provide: MatPaginatorIntl, useClass: MatPaginatorIntlCro, },
        // {
        //   provide: DateAdapter, useClass: AppDateAdapter
        // },
        {
            provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
        },
        {
            provide: MAT_DATE_LOCALE, useValue: 'vi'
        },
    ],
})
export class MaterialModule { }
