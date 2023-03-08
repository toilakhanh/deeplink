//
//  ContentView.swift
//  Demo App
//
//  Created by Khanh Duy on 08/03/2023.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack {
            Color(.gray).ignoresSafeArea()
            VStack(alignment: .leading) {
                Image("Ami")
                    .resizable()
                    .cornerRadius(20)
                    .aspectRatio(contentMode: .fit)
                    .padding(60)
                HStack {
                    Text("Some thing").font(.title).fontWeight(.semibold).foregroundColor(.white)
                    Spacer()
                    Image(systemName: "star.fill").foregroundColor(.white)
                    Image(systemName: "star.fill").foregroundColor(.white)
                    Image(systemName: "star.leadinghalf.filled").foregroundColor(.white)
                    Image(systemName: "star").foregroundColor(.white)
                    Image(systemName: "star").foregroundColor(.white)
                }.padding(20)
                Text("Lorem ipsum dolor sit amet.").foregroundColor(.white)
            }
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
