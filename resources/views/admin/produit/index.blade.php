@extends('app')
@section('content')
    <div class="d-flex justify-content-between">
        List Produits
        <div>
            <a href="">Ajouter Produits</a>
        </div>
    </div>
    <table class="table table-striped">
        <tr>
            <th>nom Produit</th>
            <th>prix</th>
            <th>description</th>
            <th>image</th>
            <th>action</th>
        </tr>
        @foreach ($produits as $produit)
            <tr>
                <th>{{ $produit->nom }}</th>
                <th>{{ $produit->prix }}</th>
                <th>{{ $produit->description }}</th>
                <th>
                    <img src="" alt="" srcset="">
                </th>
                <th class="d-flex " style="gap: 10px">
                    <a class="btn btn-success" href={{ route('produits.edit',['produit' => $produit->id]) }}>Modifier</a>
                    <form action={{ route('produits.destroy',['produit' => $produit->id]) }} method="post">
                        <button type="submit" class="btn btn-danger">Delete</button>
                    </form>
                </th>
            </tr>
        @endforeach
    </table>
@endsection