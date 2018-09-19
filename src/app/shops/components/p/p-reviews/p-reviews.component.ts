import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, OnChanges,
  OnInit,
  Renderer2,
  ViewChildren
} from '@angular/core';
import {interval} from 'rxjs';
import {Store} from '@ngrx/store';
import * as MenuActions from '../../../pages/p/store/p.actions';


@Component({
  selector: 'onpicks-p-reviews',
  templateUrl: './p-reviews.component.html',
  styleUrls: ['./p-reviews.component.scss'],
})
export class PReviewsComponent implements OnInit, AfterViewInit {

  @ViewChildren('lineList') lineList;
  @ViewChildren('hrLineList') hrLineList;

  maxRow = 6;
  totalPage;
  totalCount;
  currentPage = 1;
  totalPageArray = [];


  currentList = [];


  totalList = [
    {
      name: 'Chris',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewImg : '',
      review: 'I read quite a lot of reviews before purchasing and funny thing...' +
        'many of the flavors ppl disliked turned out to be my most favorite. ' +
        'And the flavors they liked the most, were the ones I liked the least lol. ' +
        'My point is, you just gotta try them for yourself. ' +
        'Yes, the texture is a bit odd due to the chewy nature of dates, ' +
        'but that\'s one thing I love…'
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Maecenas accumsan fringilla ligula, sit amet ultrices dui malesuada sit amet. Vivamus et suscipit quam. Praesent interdum sed arcu vitae bibendum. Pellentesque tempus pharetra mi, at rhoncus leo euismod et. '
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : '',
      review: 'Vestibulum placerat non eros nec congue. Fusce convallis turpis sed risus laoreet efficitur. Etiam at malesuada mi, ut sodales urna. Aenean accumsan ante sed nisl sodales facilisis. Maecenas at vehicula lorem. '
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewImg : '',
      review: 'Suspendisse ultricies eget erat id imperdiet. Integer efficitur a erat vitae dignissim.'
    },
    {
      name: 'Jessica',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-jessica.jpg',
      reviewImg : '',
      review: 'Aenean sodales finibus nibh at aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas dignissim orci semper, posuere nisi sed, iaculis elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse posuere pharetra justo sed tempus. Ut commodo bibendum nisl, et convallis dolor. '
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      review: 'Vivamus non lacus nibh. Nulla mattis dignissim augue, eget semper leo aliquet in.'
    },
    {
      name: 'Jessica',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-jessica.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-2.jpg',
      review: 'Duis sed justo vel lacus lacinia iaculis vel non mi. Donec risus nibh, consectetur nec finibus eget, posuere a sem. Sed in suscipit ante. Vivamus leo dolor, cursus quis porttitor non, laoreet quis purus. Phasellus feugiat sed odio in placerat. Integer tellus magna, tempor non gravida facilisis, ullamcorper ac odio. Sed tincidunt lacus ut commodo imperdiet.'
    },
    {
      name: 'Chris',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      review: 'Integer nec sapien nec justo auctor sagittis finibus nec ante. Curabitur in neque cursus, porta tortor sit amet, fermentum lorem.'
    },
    {
      name: 'Jessica',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-jessica.jpg',
      reviewImg : '',
      review: 'Nulla volutpat vitae risus sed vestibulum. Curabitur at sapien hendrerit, bibendum tortor quis, lacinia felis. Mauris leo metus, scelerisque id odio ac, congue laoreet enim. Integer pulvinar nec augue non vulputate. Curabitur ac orci libero. Cras condimentum ipsum sapien. Phasellus vitae sem sem. Cras in pulvinar ante. Donec id aliquet risus.'
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      review: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum eget ante eu diam cursus lobortis vitae eget turpis.'
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewImg : '',
      review: 'Proin quis quam feugiat, venenatis arcu id, pulvinar tellus. '
    },
    {
      name: 'Chris',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewImg : '',
      review: 'Suspendisse quis velit pellentesque, iaculis lectus et, viverra orci. Suspendisse pretium sem vel elementum cursus. '
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      review: 'Vestibulum consectetur mollis ipsum quis vestibulum. Vestibulum vitae est maximus, molestie tortor non, tincidunt orci. Mauris ut molestie nunc. Suspendisse sit amet commodo mauris.'
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : '',
      review: 'Etiam sed purus pharetra, placerat elit eu, bibendum ligula. Nullam in felis elementum justo placerat hendrerit vitae id diam. Donec odio tortor, efficitur et orci sit amet, ornare efficitur leo. Duis tincidunt porttitor odio eu finibus.'
    },
    {
      name: 'Chris',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewImg : '',
      review: 'Mauris in placerat quam. Duis elementum porta nisi vitae auctor. Donec viverra non est eget placerat. Mauris fringilla purus sapien, sed porta sem faucibus id. Maecenas eu quam iaculis, sodales turpis in, posuere nisi. Donec sed ante interdum, sollicitudin magna non, lacinia est. Proin condimentum turpis ut blandit blandit.'
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : '',
      review: ' Suspendisse eu blandit neque, eget aliquam metus. Nulla at libero tincidunt, finibus eros et, luctus dolor. Cras ut mattis mi. Morbi dapibus varius est nec varius. Fusce egestas luctus enim at imperdiet. Aliquam vel elementum nunc. Aliquam non erat luctus, cursus quam vel, venenatis odio. In hac habitasse platea dictumst. Morbi tempus sem vel vulputate porttitor.'
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : '',
      review: 'Mauris tincidunt diam et nibh tincidunt, sit amet rhoncus risus laoreet. Phasellus in scelerisque augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at est commodo, lobortis mi sed, sollicitudin risus. Phasellus non diam risus.'
    },
    {
      name: 'Jessica',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-jessica.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-2.jpg',
      review: 'Pellentesque tempus placerat nisl a tempor. Sed sit amet ultricies purus. In in ornare ante. Nulla erat diam, suscipit nec dictum vitae, molestie id felis. Etiam egestas sem at risus pellentesque vehicula. In nec enim id tortor iaculis luctus. '
    },
    {
      name: 'Chris',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewImg : '',
      review: 'Cras sit amet nisl vel nisl gravida faucibus at in libero. Phasellus at elit quis felis auctor sodales. Suspendisse nec condimentum mi. Nullam enim ipsum, suscipit at libero vel, ultricies blandit ipsum. '
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Proin dignissim mauris rutrum, pharetra urna in, sodales velit. Fusce ultricies enim non aliquet iaculis. Morbi at massa in orci rutrum vulputate. Proin eu rutrum nisi. Mauris nisi nulla, ultricies nec justo eget, scelerisque facilisis magna.'
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : '',
      review: 'pretium ullamcorper lacus felis in ligula. Curabitur tincidunt auctor consectetur. Proin rutrum a dolor sed bibendum. Praesent et leo sollicitudin metus placerat rutrum id sit amet lacus. Fusce malesuada eu ligula quis porta. '
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : '',
      review: 'Sed vitae metus maximus, placerat odio eu, finibus odio. Praesent mollis auctor velit, id congue neque. Quisque maximus arcu et velit porta, ut congue ante faucibus.'
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Nullam condimentum neque augue, non placerat augue tempor id. Vestibulum a ultrices justo. Ut rhoncus leo ac neque vestibulum molestie. In eget purus at ligula volutpat ultrices eget non magna. '
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      review: 'Donec varius viverra nisl, nec mollis metus efficitur non. Nunc id nulla hendrerit, sodales urna sed, varius ante. Phasellus nec eleifend odio, non iaculis est. Integer gravida enim ut orci vestibulum, vel pulvinar massa accumsan. '
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewImg : '',
      review: 'Cras volutpat, lorem ac blandit aliquam, nulla mi rhoncus nibh, a consequat felis nisl vel augue. Sed est est, maximus in risus sed, suscipit venenatis risus. Aliquam pulvinar metus nunc, ut faucibus nisl scelerisque imperdiet.'
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : '',
      review: 'In sit amet leo urna. Sed ut nisl et leo sodales lobortis at sed dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris in vulputate tortor.'
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Curabitur ultricies mi purus, vel vestibulum eros vehicula a. Nulla facilisi. Duis venenatis euismod augue nec convallis. Quisque vulputate vestibulum ante non cursus. Phasellus tincidunt mollis massa. Praesent ultrices lorem eu massa porttitor, eu malesuada turpis tempor. Integer id nulla neque.'
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Quisque a orci convallis leo posuere lacinia in et ipsum. Curabitur ultricies, ex et venenatis vehicula, magna nulla molestie est, volutpat tincidunt odio nisl a nulla.'
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      review: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum eget ante eu diam cursus lobortis vitae eget turpis.'
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewImg : '',
      review: 'Proin quis quam feugiat, venenatis arcu id, pulvinar tellus. '
    },
    {
      name: 'Chris',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewImg : '',
      review: 'Suspendisse quis velit pellentesque, iaculis lectus et, viverra orci. Suspendisse pretium sem vel elementum cursus. '
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      review: 'Vestibulum consectetur mollis ipsum quis vestibulum. Vestibulum vitae est maximus, molestie tortor non, tincidunt orci. Mauris ut molestie nunc. Suspendisse sit amet commodo mauris.'
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : '',
      review: 'Etiam sed purus pharetra, placerat elit eu, bibendum ligula. Nullam in felis elementum justo placerat hendrerit vitae id diam. Donec odio tortor, efficitur et orci sit amet, ornare efficitur leo. Duis tincidunt porttitor odio eu finibus.'
    },
    {
      name: 'Chris',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewImg : '',
      review: 'Mauris in placerat quam. Duis elementum porta nisi vitae auctor. Donec viverra non est eget placerat. Mauris fringilla purus sapien, sed porta sem faucibus id. Maecenas eu quam iaculis, sodales turpis in, posuere nisi. Donec sed ante interdum, sollicitudin magna non, lacinia est. Proin condimentum turpis ut blandit blandit.'
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : '',
      review: ' Suspendisse eu blandit neque, eget aliquam metus. Nulla at libero tincidunt, finibus eros et, luctus dolor. Cras ut mattis mi. Morbi dapibus varius est nec varius. Fusce egestas luctus enim at imperdiet. Aliquam vel elementum nunc. Aliquam non erat luctus, cursus quam vel, venenatis odio. In hac habitasse platea dictumst. Morbi tempus sem vel vulputate porttitor.'
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : '',
      review: 'Mauris tincidunt diam et nibh tincidunt, sit amet rhoncus risus laoreet. Phasellus in scelerisque augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at est commodo, lobortis mi sed, sollicitudin risus. Phasellus non diam risus.'
    },
    {
      name: 'Jessica',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-jessica.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-2.jpg',
      review: 'Pellentesque tempus placerat nisl a tempor. Sed sit amet ultricies purus. In in ornare ante. Nulla erat diam, suscipit nec dictum vitae, molestie id felis. Etiam egestas sem at risus pellentesque vehicula. In nec enim id tortor iaculis luctus. '
    },
    {
      name: 'Chris',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewImg : '',
      review: 'Cras sit amet nisl vel nisl gravida faucibus at in libero. Phasellus at elit quis felis auctor sodales. Suspendisse nec condimentum mi. Nullam enim ipsum, suscipit at libero vel, ultricies blandit ipsum. '
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Proin dignissim mauris rutrum, pharetra urna in, sodales velit. Fusce ultricies enim non aliquet iaculis. Morbi at massa in orci rutrum vulputate. Proin eu rutrum nisi. Mauris nisi nulla, ultricies nec justo eget, scelerisque facilisis magna.'
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : '',
      review: 'pretium ullamcorper lacus felis in ligula. Curabitur tincidunt auctor consectetur. Proin rutrum a dolor sed bibendum. Praesent et leo sollicitudin metus placerat rutrum id sit amet lacus. Fusce malesuada eu ligula quis porta. '
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : '',
      review: 'Sed vitae metus maximus, placerat odio eu, finibus odio. Praesent mollis auctor velit, id congue neque. Quisque maximus arcu et velit porta, ut congue ante faucibus.'
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Nullam condimentum neque augue, non placerat augue tempor id. Vestibulum a ultrices justo. Ut rhoncus leo ac neque vestibulum molestie. In eget purus at ligula volutpat ultrices eget non magna. '
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      review: 'Donec varius viverra nisl, nec mollis metus efficitur non. Nunc id nulla hendrerit, sodales urna sed, varius ante. Phasellus nec eleifend odio, non iaculis est. Integer gravida enim ut orci vestibulum, vel pulvinar massa accumsan. '
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewImg : '',
      review: 'Cras volutpat, lorem ac blandit aliquam, nulla mi rhoncus nibh, a consequat felis nisl vel augue. Sed est est, maximus in risus sed, suscipit venenatis risus. Aliquam pulvinar metus nunc, ut faucibus nisl scelerisque imperdiet.'
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : '',
      review: 'In sit amet leo urna. Sed ut nisl et leo sodales lobortis at sed dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris in vulputate tortor.'
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Curabitur ultricies mi purus, vel vestibulum eros vehicula a. Nulla facilisi. Duis venenatis euismod augue nec convallis. Quisque vulputate vestibulum ante non cursus. Phasellus tincidunt mollis massa. Praesent ultrices lorem eu massa porttitor, eu malesuada turpis tempor. Integer id nulla neque.'
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Quisque a orci convallis leo posuere lacinia in et ipsum. Curabitur ultricies, ex et venenatis vehicula, magna nulla molestie est, volutpat tincidunt odio nisl a nulla.'
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      review: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum eget ante eu diam cursus lobortis vitae eget turpis.'
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewImg : '',
      review: 'Proin quis quam feugiat, venenatis arcu id, pulvinar tellus. '
    },
    {
      name: 'Chris',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewImg : '',
      review: 'Suspendisse quis velit pellentesque, iaculis lectus et, viverra orci. Suspendisse pretium sem vel elementum cursus. '
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      review: 'Vestibulum consectetur mollis ipsum quis vestibulum. Vestibulum vitae est maximus, molestie tortor non, tincidunt orci. Mauris ut molestie nunc. Suspendisse sit amet commodo mauris.'
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : '',
      review: 'Etiam sed purus pharetra, placerat elit eu, bibendum ligula. Nullam in felis elementum justo placerat hendrerit vitae id diam. Donec odio tortor, efficitur et orci sit amet, ornare efficitur leo. Duis tincidunt porttitor odio eu finibus.'
    },
    {
      name: 'Chris',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewImg : '',
      review: 'Mauris in placerat quam. Duis elementum porta nisi vitae auctor. Donec viverra non est eget placerat. Mauris fringilla purus sapien, sed porta sem faucibus id. Maecenas eu quam iaculis, sodales turpis in, posuere nisi. Donec sed ante interdum, sollicitudin magna non, lacinia est. Proin condimentum turpis ut blandit blandit.'
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : '',
      review: ' Suspendisse eu blandit neque, eget aliquam metus. Nulla at libero tincidunt, finibus eros et, luctus dolor. Cras ut mattis mi. Morbi dapibus varius est nec varius. Fusce egestas luctus enim at imperdiet. Aliquam vel elementum nunc. Aliquam non erat luctus, cursus quam vel, venenatis odio. In hac habitasse platea dictumst. Morbi tempus sem vel vulputate porttitor.'
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : '',
      review: 'Mauris tincidunt diam et nibh tincidunt, sit amet rhoncus risus laoreet. Phasellus in scelerisque augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at est commodo, lobortis mi sed, sollicitudin risus. Phasellus non diam risus.'
    },
    {
      name: 'Jessica',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-jessica.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-2.jpg',
      review: 'Pellentesque tempus placerat nisl a tempor. Sed sit amet ultricies purus. In in ornare ante. Nulla erat diam, suscipit nec dictum vitae, molestie id felis. Etiam egestas sem at risus pellentesque vehicula. In nec enim id tortor iaculis luctus. '
    },
    {
      name: 'Chris',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewImg : '',
      review: 'Cras sit amet nisl vel nisl gravida faucibus at in libero. Phasellus at elit quis felis auctor sodales. Suspendisse nec condimentum mi. Nullam enim ipsum, suscipit at libero vel, ultricies blandit ipsum. '
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Proin dignissim mauris rutrum, pharetra urna in, sodales velit. Fusce ultricies enim non aliquet iaculis. Morbi at massa in orci rutrum vulputate. Proin eu rutrum nisi. Mauris nisi nulla, ultricies nec justo eget, scelerisque facilisis magna.'
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : '',
      review: 'pretium ullamcorper lacus felis in ligula. Curabitur tincidunt auctor consectetur. Proin rutrum a dolor sed bibendum. Praesent et leo sollicitudin metus placerat rutrum id sit amet lacus. Fusce malesuada eu ligula quis porta. '
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : '',
      review: 'Sed vitae metus maximus, placerat odio eu, finibus odio. Praesent mollis auctor velit, id congue neque. Quisque maximus arcu et velit porta, ut congue ante faucibus.'
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Nullam condimentum neque augue, non placerat augue tempor id. Vestibulum a ultrices justo. Ut rhoncus leo ac neque vestibulum molestie. In eget purus at ligula volutpat ultrices eget non magna. '
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      review: 'Donec varius viverra nisl, nec mollis metus efficitur non. Nunc id nulla hendrerit, sodales urna sed, varius ante. Phasellus nec eleifend odio, non iaculis est. Integer gravida enim ut orci vestibulum, vel pulvinar massa accumsan. '
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewImg : '',
      review: 'Cras volutpat, lorem ac blandit aliquam, nulla mi rhoncus nibh, a consequat felis nisl vel augue. Sed est est, maximus in risus sed, suscipit venenatis risus. Aliquam pulvinar metus nunc, ut faucibus nisl scelerisque imperdiet.'
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : '',
      review: 'In sit amet leo urna. Sed ut nisl et leo sodales lobortis at sed dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris in vulputate tortor.'
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Curabitur ultricies mi purus, vel vestibulum eros vehicula a. Nulla facilisi. Duis venenatis euismod augue nec convallis. Quisque vulputate vestibulum ante non cursus. Phasellus tincidunt mollis massa. Praesent ultrices lorem eu massa porttitor, eu malesuada turpis tempor. Integer id nulla neque.'
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Quisque a orci convallis leo posuere lacinia in et ipsum. Curabitur ultricies, ex et venenatis vehicula, magna nulla molestie est, volutpat tincidunt odio nisl a nulla.'
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      review: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum eget ante eu diam cursus lobortis vitae eget turpis.'
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewImg : '',
      review: 'Proin quis quam feugiat, venenatis arcu id, pulvinar tellus. '
    },
    {
      name: 'Chris',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewImg : '',
      review: 'Suspendisse quis velit pellentesque, iaculis lectus et, viverra orci. Suspendisse pretium sem vel elementum cursus. '
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      review: 'Vestibulum consectetur mollis ipsum quis vestibulum. Vestibulum vitae est maximus, molestie tortor non, tincidunt orci. Mauris ut molestie nunc. Suspendisse sit amet commodo mauris.'
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : '',
      review: 'Etiam sed purus pharetra, placerat elit eu, bibendum ligula. Nullam in felis elementum justo placerat hendrerit vitae id diam. Donec odio tortor, efficitur et orci sit amet, ornare efficitur leo. Duis tincidunt porttitor odio eu finibus.'
    },
    {
      name: 'Chris',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewImg : '',
      review: 'Mauris in placerat quam. Duis elementum porta nisi vitae auctor. Donec viverra non est eget placerat. Mauris fringilla purus sapien, sed porta sem faucibus id. Maecenas eu quam iaculis, sodales turpis in, posuere nisi. Donec sed ante interdum, sollicitudin magna non, lacinia est. Proin condimentum turpis ut blandit blandit.'
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : '',
      review: ' Suspendisse eu blandit neque, eget aliquam metus. Nulla at libero tincidunt, finibus eros et, luctus dolor. Cras ut mattis mi. Morbi dapibus varius est nec varius. Fusce egestas luctus enim at imperdiet. Aliquam vel elementum nunc. Aliquam non erat luctus, cursus quam vel, venenatis odio. In hac habitasse platea dictumst. Morbi tempus sem vel vulputate porttitor.'
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : '',
      review: 'Mauris tincidunt diam et nibh tincidunt, sit amet rhoncus risus laoreet. Phasellus in scelerisque augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at est commodo, lobortis mi sed, sollicitudin risus. Phasellus non diam risus.'
    },
    {
      name: 'Jessica',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-jessica.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-2.jpg',
      review: 'Pellentesque tempus placerat nisl a tempor. Sed sit amet ultricies purus. In in ornare ante. Nulla erat diam, suscipit nec dictum vitae, molestie id felis. Etiam egestas sem at risus pellentesque vehicula. In nec enim id tortor iaculis luctus. '
    },
    {
      name: 'Chris',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewImg : '',
      review: 'Cras sit amet nisl vel nisl gravida faucibus at in libero. Phasellus at elit quis felis auctor sodales. Suspendisse nec condimentum mi. Nullam enim ipsum, suscipit at libero vel, ultricies blandit ipsum. '
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Proin dignissim mauris rutrum, pharetra urna in, sodales velit. Fusce ultricies enim non aliquet iaculis. Morbi at massa in orci rutrum vulputate. Proin eu rutrum nisi. Mauris nisi nulla, ultricies nec justo eget, scelerisque facilisis magna.'
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : '',
      review: 'pretium ullamcorper lacus felis in ligula. Curabitur tincidunt auctor consectetur. Proin rutrum a dolor sed bibendum. Praesent et leo sollicitudin metus placerat rutrum id sit amet lacus. Fusce malesuada eu ligula quis porta. '
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : '',
      review: 'Sed vitae metus maximus, placerat odio eu, finibus odio. Praesent mollis auctor velit, id congue neque. Quisque maximus arcu et velit porta, ut congue ante faucibus.'
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Nullam condimentum neque augue, non placerat augue tempor id. Vestibulum a ultrices justo. Ut rhoncus leo ac neque vestibulum molestie. In eget purus at ligula volutpat ultrices eget non magna. '
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      review: 'Donec varius viverra nisl, nec mollis metus efficitur non. Nunc id nulla hendrerit, sodales urna sed, varius ante. Phasellus nec eleifend odio, non iaculis est. Integer gravida enim ut orci vestibulum, vel pulvinar massa accumsan. '
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewImg : '',
      review: 'Cras volutpat, lorem ac blandit aliquam, nulla mi rhoncus nibh, a consequat felis nisl vel augue. Sed est est, maximus in risus sed, suscipit venenatis risus. Aliquam pulvinar metus nunc, ut faucibus nisl scelerisque imperdiet.'
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : '',
      review: 'In sit amet leo urna. Sed ut nisl et leo sodales lobortis at sed dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris in vulputate tortor.'
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Curabitur ultricies mi purus, vel vestibulum eros vehicula a. Nulla facilisi. Duis venenatis euismod augue nec convallis. Quisque vulputate vestibulum ante non cursus. Phasellus tincidunt mollis massa. Praesent ultrices lorem eu massa porttitor, eu malesuada turpis tempor. Integer id nulla neque.'
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Quisque a orci convallis leo posuere lacinia in et ipsum. Curabitur ultricies, ex et venenatis vehicula, magna nulla molestie est, volutpat tincidunt odio nisl a nulla.'
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      review: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum eget ante eu diam cursus lobortis vitae eget turpis.'
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewImg : '',
      review: 'Proin quis quam feugiat, venenatis arcu id, pulvinar tellus. '
    },
    {
      name: 'Chris',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewImg : '',
      review: 'Suspendisse quis velit pellentesque, iaculis lectus et, viverra orci. Suspendisse pretium sem vel elementum cursus. '
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      review: 'Vestibulum consectetur mollis ipsum quis vestibulum. Vestibulum vitae est maximus, molestie tortor non, tincidunt orci. Mauris ut molestie nunc. Suspendisse sit amet commodo mauris.'
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : '',
      review: 'Etiam sed purus pharetra, placerat elit eu, bibendum ligula. Nullam in felis elementum justo placerat hendrerit vitae id diam. Donec odio tortor, efficitur et orci sit amet, ornare efficitur leo. Duis tincidunt porttitor odio eu finibus.'
    },
    {
      name: 'Chris',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewImg : '',
      review: 'Mauris in placerat quam. Duis elementum porta nisi vitae auctor. Donec viverra non est eget placerat. Mauris fringilla purus sapien, sed porta sem faucibus id. Maecenas eu quam iaculis, sodales turpis in, posuere nisi. Donec sed ante interdum, sollicitudin magna non, lacinia est. Proin condimentum turpis ut blandit blandit.'
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : '',
      review: ' Suspendisse eu blandit neque, eget aliquam metus. Nulla at libero tincidunt, finibus eros et, luctus dolor. Cras ut mattis mi. Morbi dapibus varius est nec varius. Fusce egestas luctus enim at imperdiet. Aliquam vel elementum nunc. Aliquam non erat luctus, cursus quam vel, venenatis odio. In hac habitasse platea dictumst. Morbi tempus sem vel vulputate porttitor.'
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : '',
      review: 'Mauris tincidunt diam et nibh tincidunt, sit amet rhoncus risus laoreet. Phasellus in scelerisque augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at est commodo, lobortis mi sed, sollicitudin risus. Phasellus non diam risus.'
    },
    {
      name: 'Jessica',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-jessica.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-2.jpg',
      review: 'Pellentesque tempus placerat nisl a tempor. Sed sit amet ultricies purus. In in ornare ante. Nulla erat diam, suscipit nec dictum vitae, molestie id felis. Etiam egestas sem at risus pellentesque vehicula. In nec enim id tortor iaculis luctus. '
    },
    {
      name: 'Chris',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewImg : '',
      review: 'Cras sit amet nisl vel nisl gravida faucibus at in libero. Phasellus at elit quis felis auctor sodales. Suspendisse nec condimentum mi. Nullam enim ipsum, suscipit at libero vel, ultricies blandit ipsum. '
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Proin dignissim mauris rutrum, pharetra urna in, sodales velit. Fusce ultricies enim non aliquet iaculis. Morbi at massa in orci rutrum vulputate. Proin eu rutrum nisi. Mauris nisi nulla, ultricies nec justo eget, scelerisque facilisis magna.'
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : '',
      review: 'pretium ullamcorper lacus felis in ligula. Curabitur tincidunt auctor consectetur. Proin rutrum a dolor sed bibendum. Praesent et leo sollicitudin metus placerat rutrum id sit amet lacus. Fusce malesuada eu ligula quis porta. '
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : '',
      review: 'Sed vitae metus maximus, placerat odio eu, finibus odio. Praesent mollis auctor velit, id congue neque. Quisque maximus arcu et velit porta, ut congue ante faucibus.'
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Nullam condimentum neque augue, non placerat augue tempor id. Vestibulum a ultrices justo. Ut rhoncus leo ac neque vestibulum molestie. In eget purus at ligula volutpat ultrices eget non magna. '
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      review: 'Donec varius viverra nisl, nec mollis metus efficitur non. Nunc id nulla hendrerit, sodales urna sed, varius ante. Phasellus nec eleifend odio, non iaculis est. Integer gravida enim ut orci vestibulum, vel pulvinar massa accumsan. '
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewImg : '',
      review: 'Cras volutpat, lorem ac blandit aliquam, nulla mi rhoncus nibh, a consequat felis nisl vel augue. Sed est est, maximus in risus sed, suscipit venenatis risus. Aliquam pulvinar metus nunc, ut faucibus nisl scelerisque imperdiet.'
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : '',
      review: 'In sit amet leo urna. Sed ut nisl et leo sodales lobortis at sed dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris in vulputate tortor.'
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Curabitur ultricies mi purus, vel vestibulum eros vehicula a. Nulla facilisi. Duis venenatis euismod augue nec convallis. Quisque vulputate vestibulum ante non cursus. Phasellus tincidunt mollis massa. Praesent ultrices lorem eu massa porttitor, eu malesuada turpis tempor. Integer id nulla neque.'
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Quisque a orci convallis leo posuere lacinia in et ipsum. Curabitur ultricies, ex et venenatis vehicula, magna nulla molestie est, volutpat tincidunt odio nisl a nulla.'
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      review: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum eget ante eu diam cursus lobortis vitae eget turpis.'
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewImg : '',
      review: 'Proin quis quam feugiat, venenatis arcu id, pulvinar tellus. '
    },
    {
      name: 'Chris',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewImg : '',
      review: 'Suspendisse quis velit pellentesque, iaculis lectus et, viverra orci. Suspendisse pretium sem vel elementum cursus. '
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      review: 'Vestibulum consectetur mollis ipsum quis vestibulum. Vestibulum vitae est maximus, molestie tortor non, tincidunt orci. Mauris ut molestie nunc. Suspendisse sit amet commodo mauris.'
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : '',
      review: 'Etiam sed purus pharetra, placerat elit eu, bibendum ligula. Nullam in felis elementum justo placerat hendrerit vitae id diam. Donec odio tortor, efficitur et orci sit amet, ornare efficitur leo. Duis tincidunt porttitor odio eu finibus.'
    },
    {
      name: 'Chris',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewImg : '',
      review: 'Mauris in placerat quam. Duis elementum porta nisi vitae auctor. Donec viverra non est eget placerat. Mauris fringilla purus sapien, sed porta sem faucibus id. Maecenas eu quam iaculis, sodales turpis in, posuere nisi. Donec sed ante interdum, sollicitudin magna non, lacinia est. Proin condimentum turpis ut blandit blandit.'
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : '',
      review: ' Suspendisse eu blandit neque, eget aliquam metus. Nulla at libero tincidunt, finibus eros et, luctus dolor. Cras ut mattis mi. Morbi dapibus varius est nec varius. Fusce egestas luctus enim at imperdiet. Aliquam vel elementum nunc. Aliquam non erat luctus, cursus quam vel, venenatis odio. In hac habitasse platea dictumst. Morbi tempus sem vel vulputate porttitor.'
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : '',
      review: 'Mauris tincidunt diam et nibh tincidunt, sit amet rhoncus risus laoreet. Phasellus in scelerisque augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at est commodo, lobortis mi sed, sollicitudin risus. Phasellus non diam risus.'
    },
    {
      name: 'Jessica',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-jessica.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-2.jpg',
      review: 'Pellentesque tempus placerat nisl a tempor. Sed sit amet ultricies purus. In in ornare ante. Nulla erat diam, suscipit nec dictum vitae, molestie id felis. Etiam egestas sem at risus pellentesque vehicula. In nec enim id tortor iaculis luctus. '
    },
    {
      name: 'Chris',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewImg : '',
      review: 'Cras sit amet nisl vel nisl gravida faucibus at in libero. Phasellus at elit quis felis auctor sodales. Suspendisse nec condimentum mi. Nullam enim ipsum, suscipit at libero vel, ultricies blandit ipsum. '
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Proin dignissim mauris rutrum, pharetra urna in, sodales velit. Fusce ultricies enim non aliquet iaculis. Morbi at massa in orci rutrum vulputate. Proin eu rutrum nisi. Mauris nisi nulla, ultricies nec justo eget, scelerisque facilisis magna.'
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : '',
      review: 'pretium ullamcorper lacus felis in ligula. Curabitur tincidunt auctor consectetur. Proin rutrum a dolor sed bibendum. Praesent et leo sollicitudin metus placerat rutrum id sit amet lacus. Fusce malesuada eu ligula quis porta. '
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : '',
      review: 'Sed vitae metus maximus, placerat odio eu, finibus odio. Praesent mollis auctor velit, id congue neque. Quisque maximus arcu et velit porta, ut congue ante faucibus.'
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Nullam condimentum neque augue, non placerat augue tempor id. Vestibulum a ultrices justo. Ut rhoncus leo ac neque vestibulum molestie. In eget purus at ligula volutpat ultrices eget non magna. '
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      review: 'Donec varius viverra nisl, nec mollis metus efficitur non. Nunc id nulla hendrerit, sodales urna sed, varius ante. Phasellus nec eleifend odio, non iaculis est. Integer gravida enim ut orci vestibulum, vel pulvinar massa accumsan. '
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewImg : '',
      review: 'Cras volutpat, lorem ac blandit aliquam, nulla mi rhoncus nibh, a consequat felis nisl vel augue. Sed est est, maximus in risus sed, suscipit venenatis risus. Aliquam pulvinar metus nunc, ut faucibus nisl scelerisque imperdiet.'
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : '',
      review: 'In sit amet leo urna. Sed ut nisl et leo sodales lobortis at sed dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris in vulputate tortor.'
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Curabitur ultricies mi purus, vel vestibulum eros vehicula a. Nulla facilisi. Duis venenatis euismod augue nec convallis. Quisque vulputate vestibulum ante non cursus. Phasellus tincidunt mollis massa. Praesent ultrices lorem eu massa porttitor, eu malesuada turpis tempor. Integer id nulla neque.'
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Quisque a orci convallis leo posuere lacinia in et ipsum. Curabitur ultricies, ex et venenatis vehicula, magna nulla molestie est, volutpat tincidunt odio nisl a nulla.'
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      review: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum eget ante eu diam cursus lobortis vitae eget turpis.'
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewImg : '',
      review: 'Proin quis quam feugiat, venenatis arcu id, pulvinar tellus. '
    },
    {
      name: 'Chris',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewImg : '',
      review: 'Suspendisse quis velit pellentesque, iaculis lectus et, viverra orci. Suspendisse pretium sem vel elementum cursus. '
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      review: 'Vestibulum consectetur mollis ipsum quis vestibulum. Vestibulum vitae est maximus, molestie tortor non, tincidunt orci. Mauris ut molestie nunc. Suspendisse sit amet commodo mauris.'
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : '',
      review: 'Etiam sed purus pharetra, placerat elit eu, bibendum ligula. Nullam in felis elementum justo placerat hendrerit vitae id diam. Donec odio tortor, efficitur et orci sit amet, ornare efficitur leo. Duis tincidunt porttitor odio eu finibus.'
    },
    {
      name: 'Chris',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewImg : '',
      review: 'Mauris in placerat quam. Duis elementum porta nisi vitae auctor. Donec viverra non est eget placerat. Mauris fringilla purus sapien, sed porta sem faucibus id. Maecenas eu quam iaculis, sodales turpis in, posuere nisi. Donec sed ante interdum, sollicitudin magna non, lacinia est. Proin condimentum turpis ut blandit blandit.'
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : '',
      review: ' Suspendisse eu blandit neque, eget aliquam metus. Nulla at libero tincidunt, finibus eros et, luctus dolor. Cras ut mattis mi. Morbi dapibus varius est nec varius. Fusce egestas luctus enim at imperdiet. Aliquam vel elementum nunc. Aliquam non erat luctus, cursus quam vel, venenatis odio. In hac habitasse platea dictumst. Morbi tempus sem vel vulputate porttitor.'
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : '',
      review: 'Mauris tincidunt diam et nibh tincidunt, sit amet rhoncus risus laoreet. Phasellus in scelerisque augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at est commodo, lobortis mi sed, sollicitudin risus. Phasellus non diam risus.'
    },
    {
      name: 'Jessica',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-jessica.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-2.jpg',
      review: 'Pellentesque tempus placerat nisl a tempor. Sed sit amet ultricies purus. In in ornare ante. Nulla erat diam, suscipit nec dictum vitae, molestie id felis. Etiam egestas sem at risus pellentesque vehicula. In nec enim id tortor iaculis luctus. '
    },
    {
      name: 'Chris',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewImg : '',
      review: 'Cras sit amet nisl vel nisl gravida faucibus at in libero. Phasellus at elit quis felis auctor sodales. Suspendisse nec condimentum mi. Nullam enim ipsum, suscipit at libero vel, ultricies blandit ipsum. '
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Proin dignissim mauris rutrum, pharetra urna in, sodales velit. Fusce ultricies enim non aliquet iaculis. Morbi at massa in orci rutrum vulputate. Proin eu rutrum nisi. Mauris nisi nulla, ultricies nec justo eget, scelerisque facilisis magna.'
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : '',
      review: 'pretium ullamcorper lacus felis in ligula. Curabitur tincidunt auctor consectetur. Proin rutrum a dolor sed bibendum. Praesent et leo sollicitudin metus placerat rutrum id sit amet lacus. Fusce malesuada eu ligula quis porta. '
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : '',
      review: 'Sed vitae metus maximus, placerat odio eu, finibus odio. Praesent mollis auctor velit, id congue neque. Quisque maximus arcu et velit porta, ut congue ante faucibus.'
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Nullam condimentum neque augue, non placerat augue tempor id. Vestibulum a ultrices justo. Ut rhoncus leo ac neque vestibulum molestie. In eget purus at ligula volutpat ultrices eget non magna. '
    },
    {
      name: 'Rose',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      review: 'Donec varius viverra nisl, nec mollis metus efficitur non. Nunc id nulla hendrerit, sodales urna sed, varius ante. Phasellus nec eleifend odio, non iaculis est. Integer gravida enim ut orci vestibulum, vel pulvinar massa accumsan. '
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewImg : '',
      review: 'Cras volutpat, lorem ac blandit aliquam, nulla mi rhoncus nibh, a consequat felis nisl vel augue. Sed est est, maximus in risus sed, suscipit venenatis risus. Aliquam pulvinar metus nunc, ut faucibus nisl scelerisque imperdiet.'
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewImg : '',
      review: 'In sit amet leo urna. Sed ut nisl et leo sodales lobortis at sed dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris in vulputate tortor.'
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Curabitur ultricies mi purus, vel vestibulum eros vehicula a. Nulla facilisi. Duis venenatis euismod augue nec convallis. Quisque vulputate vestibulum ante non cursus. Phasellus tincidunt mollis massa. Praesent ultrices lorem eu massa porttitor, eu malesuada turpis tempor. Integer id nulla neque.'
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewImg : '',
      review: 'Quisque a orci convallis leo posuere lacinia in et ipsum. Curabitur ultricies, ex et venenatis vehicula, magna nulla molestie est, volutpat tincidunt odio nisl a nulla.'
    }
  ];

  starMaxList = {Star5 : 55, Star4 : 18, Star3 : 6, Star2 : 7, Star1 : 14}
  starList = {Star5 : 0, Star4 : 0, Star3 : 0, Star2 : 0, Star1 : 0}
  objectKeys = Object.keys;



  constructor(
    private renderer: Renderer2,
    private store: Store<any>) {

  }

  ngOnInit() {
    this.totalCount = this.totalList.length;
    this.totalPage = this.totalCount / this.maxRow;
    this.totalPageArray =  Array(parseInt(this.totalPage, 10));
    this.totalPageArray.push(this.totalPageArray.length + 1);

    this.currentList = this.totalList.slice( 0, 6 );
  }

  ngAfterViewInit() {

    const bodyRect = document.body.getBoundingClientRect();
    const elemRect = this.hrLineList.last.nativeElement.getBoundingClientRect();
    let offset   = elemRect.top - bodyRect.top;
    offset = Math.floor(offset);

    this.store.dispatch( new MenuActions.UpdateMenuPosition(offset) );


    let maxValue = 0;
    let basisValue = 0;


    this.lineList.forEach( (val, index) => {

      maxValue = this.starMaxList['Star' + ( 5 - index )];
      basisValue = maxValue * 0.01;
      this.renderer.setStyle(val.nativeElement, 'transition-duration', (basisValue * 5) + 's' );
      this.renderer.setStyle(val.nativeElement, 'width', 51.6 * basisValue + 'rem' );
    });
  }

  numberArray(n: number): any[] {
    return Array(n);
  }

  paginate(pageIndex) {
    this.currentPage = pageIndex;
    this.currentList = this.totalList.slice(  (this.currentPage - 1 ) * this.maxRow , this.currentPage * this.maxRow )

    const source = this.hrLineList.changes.subscribe( t => {
      source.unsubscribe();
      const bodyRect = document.body.getBoundingClientRect();
      const elemRect = this.hrLineList.last.nativeElement.getBoundingClientRect();

      let offset   = elemRect.top - bodyRect.top;
      offset -= 680;
      this.store.dispatch( new MenuActions.UpdateMenuPosition(offset) );
    });

  }

}


