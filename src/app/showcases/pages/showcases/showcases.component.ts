import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector: 'onpicks-showcases',
  templateUrl: './showcases.component.html',
  styleUrls: ['./showcases.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ShowcasesComponent {

  imgSrc = '';
  showcasesDataList = [
    {
      category : 'Beauty',
      title : 'Have You Discovered Lancome?',
      imgSrc : 'https://picsum.photos/360/360?image=100'
    },
    {
      category : 'Beauty',
      title : 'You Won’t Believe That These Brands are Vegan',
      imgSrc : 'https://picsum.photos/360/360?image=200'
    },
    {
      category : 'Electronics',
      title : 'The New Galaxy',
      imgSrc : 'https://picsum.photos/360/360?image=300'
    },
    {
      category : 'Beauty',
      title : 'Match Your Scent to Your Mood',
      imgSrc : 'https://picsum.photos/360/360?image=400'
    },
    {
      category : 'Fashion',
      title : 'Rolex - Timeless Luxury Watches',
      imgSrc : 'https://picsum.photos/360/360?image=500'
    },
    {
      category : 'Pantry & Household',
      title : 'Whole Food Protein Bars with Real Ingredients',
      imgSrc : 'https://picsum.photos/360/360?image=600'
    },
    {
      category : 'Beauty',
      title : 'Match Your Scent to Your Mood',
      imgSrc : 'https://picsum.photos/360/360?image=400'
    },
    {
      category : 'Fashion',
      title : 'Rolex - Timeless Luxury Watches',
      imgSrc : 'https://picsum.photos/360/360?image=500'
    },
    {
      category : 'Pantry & Household',
      title : 'Whole Food Protein Bars with Real Ingredients',
      imgSrc : 'https://picsum.photos/360/360?image=600'
    },
    {
      category : 'Beauty',
      title : 'Match Your Scent to Your Mood',
      imgSrc : 'https://picsum.photos/360/360?image=400'
    },
    {
      category : 'Fashion',
      title : 'Rolex - Timeless Luxury Watches',
      imgSrc : 'https://picsum.photos/360/360?image=500'
    },
    {
      category : 'Pantry & Household',
      title : 'Whole Food Protein Bars with Real Ingredients',
      imgSrc : 'https://picsum.photos/360/360?image=600'
    },
  ]

  constructor() { }

  onDragOver(files) {
    files.preventDefault();
  }

  dropFiles(event) {
    const that = this;
    event.dataTransfer.dropEffect = 'copy';

    const temp = URL.createObjectURL(event.dataTransfer.files[0]);
    this.imgSrc = temp;
    event.preventDefault();
  }

}
